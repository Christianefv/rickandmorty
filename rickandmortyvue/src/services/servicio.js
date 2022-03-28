import base from '@/services/servicio-base';

const servicio = {};

servicio.all = function() {
    return base.get('/character/')
        .then(r => {
            return r.data;
        })
        .catch(e => {
            return e;
        })
}

servicio.gender = function(gender) {
    return base.get('/character/?gender='+gender)
        .then(r => {
            return r.data;
        })
        .catch(e => {
            return e;
        })
}

servicio.searchbyname = function(name) {
    return base.get('/character/?name='+name)
        .then(r => {
            return r.data;
        })
        .catch(e => {
            return e;
        })
}
export default servicio;