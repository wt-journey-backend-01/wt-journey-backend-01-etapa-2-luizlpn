const casos = [
    {
        id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1" 
    
    },
    //Demais objetos
]

function findAll() {
    return casos
}

function findById(id) {
    return casos.find(caso => caso.id === id);
}

function create(caso) {
    casos.push(caso);
    return caso;
}

function update(id, updatedCaso) {
    const index = casos.findIndex(caso => caso.id === id);
    if (index !== -1) {
        casos[index] = { ...casos[index], ...updatedCaso };
        return casos[index];
    }
    return null;
}   

function remove(id) {
    const index = casos.findIndex(caso => caso.id === id);
    if (index !== -1) {
        return casos.splice(index, 1)[0];
    }
    return null;
}

function patch(id, updatedFields) {
    const caso = findById(id);
    if (!caso) return null;

    Object.keys(updatedFields).forEach(key => {
        if (updatedFields[key] !== undefined) {
            caso[key] = updatedFields[key];
        }
    });

    return caso;
}
module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    patch
}
