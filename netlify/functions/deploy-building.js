exports.handler = async (event, context) => {
    const subject = event.queryStringParameters.name || "World";
    console.log("Function deploy-building running", event, context);
    return {
        statusCode: 200,
        body: `Hello ${subject}!`,
    };
};
