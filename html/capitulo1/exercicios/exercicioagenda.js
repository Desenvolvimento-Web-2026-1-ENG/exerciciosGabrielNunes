/**
 * Classe responsável por gerir a estrutura de dados de uma Agenda de Contatos.
 * Atua como o molde principal da nossa aplicação.
 */
class Agenda {
        constructor() {
        this.contatos = [];
    }

    /**
     * Adiciona um novo contato à memória da agenda.
     * @param {string} nome - O nome do contato.
     * @param {string} telefone - O telefone do contato.
     */
    adicionarContato(nome, telefone) {
        const novoContato = {
            nome: nome,
            telefone: telefone
        };
    
        this.contatos.push(novoContato);
        console.log(`[Sucesso] O contato '${nome}' foi adicionado à agenda.`);
    }

    listarContatos() {
        console.log("\n--- Lista de Contatos Registados ---");
        if (this.contatos.length === 0) {
            console.log("A sua agenda encontra-se vazia no momento.");
            return; 
        }
        this.contatos.forEach((contato, indice) => {
            console.log(`${indice + 1}. Nome: ${contato.nome} | Tel: ${contato.telefone}`);
        });
        
        console.log("------------------------------------\n");
    }

    /**
     * Busca um contato pelo nome exato e exibe o seu telefone.
     * @param {string} nomeBuscado
     */
    buscarContato(nomeBuscado) {
        const contatoEncontrado = this.contatos.find(contato => contato.nome === nomeBuscado);
        if (contatoEncontrado) {
            console.log(`[Busca] O telefone de ${nomeBuscado} é: ${contatoEncontrado.telefone}`);
        } else {
        
            console.error(`[Erro] O contato '${nomeBuscado}' não foi encontrado no sistema.`);
        }
    }
}

const minhaAgenda = new Agenda();

minhaAgenda.adicionarContato("Professor Ronaldo", "22-99999-1111");
minhaAgenda.adicionarContato("Goytaborgs Equipe", "22-98888-2222");
minhaAgenda.listarContatos();
minhaAgenda.buscarContato("Professor Ronaldo");
minhaAgenda.buscarContato("Yasmin");