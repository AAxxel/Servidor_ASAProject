const tratamientosEstados = ['Pendiente', 'En curso', 'Completado', 'Suspendido'];
const rescastesEstados = ['Reportado', 'En curso', 'Completado', 'Cancelado', 'No exitoso'];

const isStatusValid = (estado, nuevoEstado) => {
    if( tratamientosEstados.includes(estado) && tratamientosEstados.includes(nuevoEstado) ) {
        if( tratamientosEstados.indexOf(estado) === 0 && tratamientosEstados.indexOf(nuevoEstado) === 2 ){
            return false;
        }

        else if( tratamientosEstados.indexOf(estado) === 2 && tratamientosEstados.indexOf(nuevoEstado) === 0 ){
            return false;
        }
    }
    
    return true
}

const isStatusRescateValid = (estado, nuevoEstado) => {
    if( rescastesEstados.includes(estado) && rescastesEstados.includes(nuevoEstado) ) {
        if( rescastesEstados.indexOf(estado) === 0 && rescastesEstados.indexOf(nuevoEstado) === 2 ){
            return false;
        }

        else if( rescastesEstados.indexOf(estado) === 2 && rescastesEstados.indexOf(nuevoEstado) === 0 ){
            return false;
        }
    }
    
    return true
}

module.exports = { isStatusValid, isStatusRescateValid }