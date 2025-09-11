const sapo = {nome: 'Gamabunta'};
const poderesNinja = {
    lutar: function(nome){
        console.log(this.nome + " sabe lutar.");
    },
    invisivel: function(nome){
        console.log(this.nome + " pode ficar invisível.");
    }
};

Object.setPrototypeOf(sapo, poderesNinja);

sapo.lutar();
sapo.invisivel();
