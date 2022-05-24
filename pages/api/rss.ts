import { link } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { title } from "process";
import parser from "rss-parser";
const Parser = new parser();

export type RssFeetItem = {
  title?: string;
  link?: string;
  content?: string;
  imageUrl?: string;
  id?: string;
  raw?: any;
};

type PawRssFeetItem = {
  creator?: string;
  title?: string;
  link?: string;
  content?: string;
  guid?: string;
  enclosure?: {
    url?: string;
  };
};

type RssFetcherOptions = {
  ttl: number;
  url: string;
};
class RssFetcher {
  items: RssFeetItem[] = [];
  ttl;
  url;
  lastFetch: number = 0;
  Parser = new parser();
  constructor({ ttl, url }: RssFetcherOptions) {
    this.ttl = ttl;
    this.url = url;
  }

  getData() {
    return this.items;
  }

  shouldFetch() {
    if (!this.lastFetch) {
      return true;
    }
    if (this.timePassed() > this.ttl) return true;
  }

  timePassed() {
    return (this.lastFetch - Date.now()) * -1;
  }

  async loadCashed() {
    if (this.shouldFetch()) {
      await this.loadData();
    }
  }

  getCheckedItems(items: any[]) {
    return items.slice(0, 4).map((i) => this.parseItem(i));
  }
  parseItem(item: PawRssFeetItem) {
    return {
      imageUrl: item.enclosure?.url,
      title: item.title,
      link: item.link,
      id: item.guid,
      content: item.content,
      raw: item,
    } as RssFeetItem;
  }

  checkItem(item: any) {
    let ok = true;
    const fieldsToCheck = ["title", "link", "content"];
    fieldsToCheck.forEach((field) => {
      if (!item[field]) {
        ok = false;
      }
    });
    return ok;
  }

  async loadData() {
    try {
      const feed = await Parser.parseURL(
        "https://hamburg-news.hamburg/all_news/rss.xml"
      );
      if (feed && feed.items) {
        this.lastFetch = Date.now();
        this.items = this.getCheckedItems(feed.items);
      }
    } catch (error) {}
  }
}

const Fetcher = new RssFetcher({
  ttl: 10000,
  url: "https://hamburg-news.hamburg/all_news/rss.xml",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await Fetcher.loadCashed();
  const items = Fetcher.getData();
  return res.json(items);
}
