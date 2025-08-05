const agentes = [
  {
    id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
    nome: "Rommel Carneiro",
    dataDeIncorporacao: "1992-10-04",
    cargo: "delegado"
  },
  {
    id: "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    nome: "Ana Silva",
    dataDeIncorporacao: "2015-03-15",
    cargo: "inspetor"
  }
];

function findAll() {
  return agentes;
}

function findById(id) {
  return agentes.find(agente => agente.id === id);
}

function create(agente) {
  agentes.push(agente);
  return agente;
}

function update(id, updatedAgente) {
  const index = agentes.findIndex(agente => agente.id === id);
  if (index !== -1) {
    agentes[index] = { ...agentes[index], ...updatedAgente };
    return agentes[index];
  }
  return null;
}   

function remove(id) {
  const index = agentes.findIndex(agente => agente.id === id);
  if (index !== -1) {
    return agentes.splice(index, 1)[0];
  }
  return null;
}

function patch(id, updatedFields) {
  const agente = findById(id);
  if (!agente) return null;

  Object.keys(updatedFields).forEach(key => {
    if (updatedFields[key] !== undefined) {
      agente[key] = updatedFields[key];
    }
  });

  return agente;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  patch
};