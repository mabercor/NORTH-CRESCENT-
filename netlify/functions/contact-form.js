exports.handler = async (event) => {

  // SOLO POST

  if (event.httpMethod !== "POST") {

    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };

  }

  try {

    // PARSE BODY

    const data = JSON.parse(event.body);

    // TURNSTILE TOKEN

    const token =
    data["cf-turnstile-response"];

    // VALIDAR TOKEN

    const verify =
    await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },

        body: new URLSearchParams({

          secret: process.env.TURNSTILE_SECRET_KEY,

          response: token

        })

      }
    );

    const verifyData =
    await verify.json();

    // BLOQUEAR SI FALLA

    if (!verifyData.success) {

      return {
        statusCode: 403,
        body: JSON.stringify({
          error: "Bot detection failed"
        })
      };

    }

    // ENVIAR A MAKE

    const makeResponse =
    await fetch(
      process.env.MAKE_WEBHOOK_URL,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
      }
    );

    // RESPUESTA

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
