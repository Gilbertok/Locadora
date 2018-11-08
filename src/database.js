var senhaDoBancoUser = 'locadora.users';
var resumesList = JSON.parse(localStorage.getItem(senhaDoBancoUser)) || [];

Resume = {};
Resume.getUser = function(searchTerm, advancedFilter) {
    advancedFilter = advancedFilter || {};
    return resumesList.filter(function(resume) {
        return resume.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resume.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resume.habilidades.some(function(h) {
                return h.nome.toLowerCase().includes(searchTerm)
            });
    });
}

Resume.addUser = function(resume) {
    resumesList.push(resume);
    localStorage.setItem(senhaDoBancoUser, JSON.stringify(resumesList) );
}