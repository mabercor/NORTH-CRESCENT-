exports.handler = async (event) => {

  if (event.httpMethod !== "POST") {

    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };

  }

  try {

    const data =
    JSON.parse(event.body);

    // TURNSTILE TOKEN

    const token =
    data["cf-turnstile-response"];

    // VALIDATE TURNSTILE

    const verifyResponse =
    await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {

        method: "POST",

        headers: {
          "Content-Type":
          "application/x-www-form-urlencoded"
        },

        body:
        `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`

      }
    );

    const verifyData =
    await verifyResponse.json();

    // BLOCK BOTS

    if (!verifyData.success) {

      return {

        statusCode: 403,

        body: JSON.stringify({

          error:
          "Turnstile validation failed"

        })

      };

    }

    // SEND TO MAKE

    const makeResponse =
    await fetch(

      process.env.MAKE_WEBHOOK_URL,

      {

        method: "POST",

        headers: {
          "Content-Type":
          "application/json"
        },

        body:
        JSON.stringify(data)

      }

    );

    // SUCCESS

    return {

      statusCode: 200,

      body: JSON.stringify({

        success: true

      })

    };

  } catch (error) {

    return {

      statusCode: 500,

      body: JSON.stringify({

        error: error.message

      })

    };

  }

};
