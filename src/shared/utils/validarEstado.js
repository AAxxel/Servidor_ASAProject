const tratamientosEstados = ['Pendiente', 'En curso', 'Completado', 'Suspendido'];

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

module.exports = { isStatusValid }