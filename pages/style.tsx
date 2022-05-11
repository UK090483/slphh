import * as React from "react";
import Script from "next/script";
interface IStypeProps {}

const code = `<form
class="layout_form cr_form cr_font"
action="https://seu2.cleverreach.com/f/320524-324818/wcs/"
method="post"
target="_blank"
>
<div class="cr_body cr_page cr_font formbox">
  <div class="non_sortable"></div>

  <div class="editable_content">
    <div id="7269136" rel="mce_text" class="cr_ipe_item ui-sortable">
      <div class="mce_text">
        <p>
          <span mce_
            >Scaleup Landing Pad Hamburg is supporting promising international
            companies to scale up their business in Hamburg and
            Germany.&nbsp;</span
          >
        </p>
        <p>
          <span mce_
            >Subscribe to Scaleup Landing Pad Hamburg's Newsletter to receive
            information about the offer, benefits and success stories from
            Hamburg!</span
          >
        </p>
        <p><br /></p>
      </div>
    </div>
    <div id="7253667" rel="email" class="cr_ipe_item ui-sortable musthave">
      <label for="text7253667" class="itemname">Email*</label>
      <input id="text7253667" name="email" value="" type="text" />
    </div>
    <div id="7253746" rel="textarea" class="cr_ipe_item ui-sortable">
      <label for="textarea_7253746" class="itemname">Name</label
      ><textarea id="textarea_7253746" name="1060535"></textarea>
    </div>
    <div
      id="7253787"
      rel="hr"
      class="cr_ipe_item ui-sortable cr_noedit"
      style=""
    >
      <hr class="cr_hr" />
    </div>
    <div
      id="7253671"
      rel="recaptcha"
      class="cr_ipe_item ui-sortable musthave"
    >
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <br />
      <div
        id="recaptcha_v2_widget"
        class="g-recaptcha"
        data-theme="light"
        data-size="normal"
        data-sitekey="6Lfhcd0SAAAAAOBEHmAVEHJeRnrH8T7wPvvNzEPD"
      ></div>
      <br />
    </div>
    <div
      id="7253811"
      rel="hr"
      class="cr_ipe_item ui-sortable cr_noedit"
      style=""
    >
      <hr class="cr_hr" />
    </div>
    <div
      id="7253669"
      rel="button"
      class="cr_ipe_item ui-sortable submit_container"
    >
      <button type="submit" class="cr_button">Subscribe</button>
    </div>
  </div>

  <noscript
    ><a href="http://www.cleverreach.de">www.CleverReach.de</a></noscript
  >
</div>

<div class="badge">
  <a
    href="https://www.cleverreach.de/?utm_source=system&utm_medium=form&utm_campaign=c320524"
    target="_blank"
    ><img
      src="https://d388us03v35p3m.cloudfront.net/cr3_images/badget1.png"
      border="0"
  /></a>
</div>
</form>
`;

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className=" ">
      <div dangerouslySetInnerHTML={{ __html: code }} />

      <div
        dangerouslySetInnerHTML={{
          __html: `
      
      
      
      `,
        }}
      />

      <Script type="text/javascript" id="bla">
        {`
        grecaptcha.render('recaptcha_v2_widget');
        console.log('blaaaaaa');
        var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };`}
      </Script>

      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async
        defer
      ></Script>
    </div>
  );
};

export default Style;
