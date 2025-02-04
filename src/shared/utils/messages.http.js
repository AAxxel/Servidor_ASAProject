const MESSAGES = {
    SUCCESS: {
        CREATED: "Registro creado exitosamente.",
        UPDATED: "Registro actualizado correctamente.",
        DELETED: "Registro eliminado exitosamente.",
        FETCHED: "Datos obtenidos correctamente."
    },
    ERROR: {
        NOT_FOUND: "El recurso solicitado no existe.",
        UNAUTHORIZED: "No tienes permisos para realizar esta acción.",
        BAD_REQUEST: "La solicitud es inválida o tiene datos incorrectos.",
        SERVER_ERROR: "Ocurrió un error interno en el servidor."
    }
};

module.exports = MESSAGES;
