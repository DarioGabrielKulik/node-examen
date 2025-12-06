export const success = (req, res, message, status = 200 ) => {
    res.status(status).send({
        error: false,
        status: status,
        body: message
    });
};
export const crate = (req, res, message, status = 201 ) => {
    res.status(status).send({
        error: false,
        status: status,
        body: message
    });
};
export const errorServer = (req, res, message, status = 500) => {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    });
};
export const notFound = (req, res, message, status = 404) => {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    });
};
export const error = (req, res, message, status = 400) => {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    });
};

