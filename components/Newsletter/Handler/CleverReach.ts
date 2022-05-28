const token_url = "https://rest.cleverreach.com/oauth/token.php";
const client_url = "https://rest.cleverreach.com/v3/";
class CleverReach {
  clientId;
  clientSecret;
  groupID;
  formID;
  token: string | null = null;

  constructor() {
    this.clientId = process.env.CLEVER_REACH_CLIENT_ID || "missing";
    this.clientSecret = process.env.CLEVER_REACH_CLIENT_SECRET || "missing";
    this.groupID = process.env.CLEVER_REACH_GROUPE_ID || "missing";
    this.formID = process.env.CLEVER_REACH_FORM_ID || "missing";
    this.checkEnvVars();
  }

  async addRecipient(data: {
    email: string;
    global_attributes: {
      firstname?: string;
      lastname?: string;
      unternehmen?: string;
    };
  }) {
    return await this.fetch(
      this.buildUrl(`groups.json/${this.groupID}/receivers`),
      { body: JSON.stringify(data) }
    );
  }

  async activateRecipient(data: {
    email: string;
    doidata: { user_ip: string; referer: string; user_agent: string };
  }) {
    return await this.fetch(
      this.buildUrl(`forms/${this.formID}/send/activate`),
      { body: JSON.stringify(data) }
    );
  }

  async getGroups() {
    return await this.fetch(this.buildUrl("groups"), {});
  }
  async getForms() {
    return await this.fetch(this.buildUrl("forms"), {});
  }
  buildUrl(url: string) {
    return `https://rest.cleverreach.com/v3/${url}.json`;
  }

  checkEnvVars() {
    ["clientId", "clientSecret", "groupID", "formID"].forEach((v) => {
      //@ts-ignore
      if (this[v] === "missing") {
        throw new Error(`${v} missing for CleverReach`);
      }
    });
  }

  logger(message: string | number, type: "info" | "error" = "info") {
    if (type === "info") {
      console.log(message);
    }
    if (type === "error") {
      console.error(message);
    }
  }
  async fetch(url: string, options: RequestInit) {
    if (!this.token) {
      this.token = await this.getToken();
    }
    return this.client(url, options);
  }

  async getToken() {
    const res = await this.client(token_url, {
      method: "POST",
      headers: {
        Authorization: `Basic   ${new Buffer(
          this.clientId + ":" + this.clientSecret
        ).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ grant_type: "client_credentials" }),
    });
    if (res && res["access_token"]) {
      return res["access_token"] as string;
    }
    return null;
  }
  async client(url: string, options: RequestInit) {
    try {
      const fetchResult = await fetch(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
        ...options,
      });
      this.logger(fetchResult.status);
      this.logger(fetchResult.statusText);
      if (fetchResult.ok) {
        const json = await fetchResult.json();
        this.logger(json);

        return json as { [t: string]: any };
      } else {
        this.logger(await fetchResult.text());
        return null;
      }
    } catch (error) {
      this.logger(error as string, "error");
      return null;
    }
  }
}

export default CleverReach;
