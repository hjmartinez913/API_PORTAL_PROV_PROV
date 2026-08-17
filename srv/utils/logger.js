const log = cds.log('api-proveedores');

class ServiceLogger {
    
    static logError(context, error) {
        log.error(`[ERROR] ${context}:`, error)
    }
}


module.exports = { ServiceLogger };