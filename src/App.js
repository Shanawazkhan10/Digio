import { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    // Jquery for init PayNimo()
    loadScript("https://app.digio.in/sdk/v9/digio.js");
  }, []);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  var digio = () => {
    var options = {
      environment: "sandbox",

      callback: function (response) {
        console.log("I M RUNNING ");

        if (response.hasOwnProperty("error_code")) {
          return alert("error occurred in process");
        }

        console.log("Signing completed successfully");

        // }

        // on success API CALL

        // Esign_doc_download();
      },

      logo: "https://www.mylogourl.com/image.jpeg",

      //  redirect_url=https://my_redirection_url",

      is_iframe: true,

      theme: {
        primaryColor: "white",

        secondaryColor: "black"
      }
    };

    var digio = new window.Digio(options); //options is the digio options constructor object.

    digio.init();

    digio.submit("DID2206201129435468BL4ACI83WO8PD", "828487788");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={digio}>dddddd</button>
    </div>
  );
}
