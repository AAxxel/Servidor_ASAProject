const AmoRepository = require('./amos.repository');
const RolRepository = require('./roles.repository');
const UsuarioRepository = require('./usuarios.repository');
const EspecieRepository = require('./especies.repository');
const RazaRepository = require('./raza.repository');
const MascotaRepository = require('./mascotas.repository');
const CuidadoRepository = require('./cuidados.repository');
const EnfermedadRepository = require('./enfermedades.repository');
const MedicamentoRepository = require('./medicamentos.repository');
const CuidadoMascotasRepository = require('./cuidados_mascotas.repository');
const EnfermedadMascotaRepository = require('./enfermedades_mascotas.repository');

module.exports = {  
    AmoRepository: AmoRepository,
    RolRepository: RolRepository,
    UsuarioRepository: UsuarioRepository,
    EspecieRepository: EspecieRepository,
    RazaRepository: RazaRepository,
    MascotaRepository: MascotaRepository,
    CuidadoRepository: CuidadoRepository,
    EnfermedadRepository: EnfermedadRepository,
    MedicamentoRepository: MedicamentoRepository,
    CuidadoMascotasRepository: CuidadoMascotasRepository,
    EnfermedadMascotaRepository: EnfermedadMascotaRepository
 };