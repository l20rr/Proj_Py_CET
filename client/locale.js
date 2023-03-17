export {
    tr,
    trDoc,
    setCurrentLanguage,
}
/*
    No código HTML, em vez de (por exemplo):
        <h1>Torneio da Primavera</h1>
        OU
        <h1>Spring Tournament</h1>
    colocamos: 
        <h1>{{tr TOURNAMENT_NAME}}</h1>
 */

const userMessages = {
    en_US: {
        REGISTER: "Register",
        ERR_ENROLLING: "We were unable to proceed with the enrollment.",
        ERR_UNSPECIFIED_TOURNAMENT: "We're sorry but there was a problem with the enrolling data.",
        ERR_PLAYER_ALREADY_ENROLLED: "Player already enrolled at the tournament.",
        ERR_UNKNOWN_TOURNAMENT_ID: "We're sorry but there was a problem with the enrolling data.",
        SUCCESS_ENROLLING: "Player successfully enrolled.",
        PLAYER: "Player",
        ID_NUMBER: "Identification Number",
        EMAIL_ADDR: "Email address",
        TOURNAMENT_NAME: "Ténis Tournament",
        TOURNAMENT_PRIZES: "Prizes up to 10th place",
        RULES: "Regulation",
        MEMBERS: "Members",
        PORTUGAL: "Portuguese",
        ENGLAND: "English",
        ENROLL_HERE: "Register for tournament here",
        FULL_NAME_LABEL: "Full name",
        EMAIL_ADDR_LABEL: "Email",
        PHONE_NUMBER_LABEL: "Phone number",
        BIRTH_DATE_LABEL: "Birth date (DD/MM/YYYY)",
        PASSWORD_LABEL: "Password",
        REPEAT_PASSWORD_LABEL: "Password again",
        PLAYER_LEVEL_LABEL: "Level",
        SEASON_TOURNAMENT: "Tournament",
        EASTER_TOURNAMENT: "Easter Tournament",
        SUMMER_TOURNAMENT: "Summer Tournament",
        DATE_FMT: "(MM/DD/YYYY)",
        PRIVACY_POLICY_MSG: "I read and I agree with the",
        PRIVACY_POLICY: "Privacy Policy",
        BEGINNER_LEVEL: "Beginner",
        INTERMEDIATE_LEVEL: "Intermediate",
        ADVANCED_LEVEL: "Advanced",
        PRE_PRO_LEVEL: "Pre-professional",
        PRO_LEVEL: "Professional",
        SUBMIT_BTN: "Submit",
        RESET_BTN: "Reset",
    },
    pt_PT: {
        REGISTER: "Registro",
        ERR_ENROLLING: "Não foi possível concluir a inscrição.",
        ERR_UNSPECIFIED_TOURNAMENT: "Ooops...detectámos um problema com os dados de inscrição.",
        ERR_PLAYER_ALREADY_ENROLLED: "O jogador já se encontra inscrito no torneio.",
        ERR_UNKNOWN_TOURNAMENT_ID: "Ooops...torneio desconhecido.",
        SUCCESS_ENROLLING: "Jogador inscrito com sucesso.",
        PLAYER: "Jogador",
        EMAIL_ADDR: "Endereço de email",
        TOURNAMENT_NAME: "Torneio de Ténis",
        TOURNAMENT_PRIZES: "Prémios até ao 10&#x2070; lugar",
        RULES: "Regulamento",
        MEMBERS: "Membros",
        PORTUGAL: "Português",
        ENGLAND: "Inglês",
        ENROLL_HERE: "Inscreva-se aqui",
        FULL_NAME_LABEL: "Nome completo",
        EMAIL_ADDR_LABEL: "Email",
        PHONE_NUMBER_LABEL: "Telefone",
        BIRTH_DATE_LABEL: "Data de nascimento",
        PASSWORD_LABEL: "Senha",
        REPEAT_PASSWORD_LABEL: "Senha de novo",
        PLAYER_LEVEL_LABEL: "Nível",
        SEASON_TOURNAMENT: "Torneio",
        EASTER_TOURNAMENT: "Torneio de Páscoa",
        SUMMER_TOURNAMENT: "Torneio de Verão",
        DATE_FMT: "(DD/MM/AAAA)",
        PRIVACY_POLICY_MSG: "Li e concordo com a",
        PRIVACY_POLICY: "Política de Privacidade",
        BEGINNER_LEVEL: "Iniciado",
        INTERMEDIATE_LEVEL: "Intermédio",
        ADVANCED_LEVEL: "Avançado",
        PRE_PRO_LEVEL: "Pré-profissional",
        PRO_LEVEL: "Profissional",
        SUBMIT_BTN: "Submeter",
        RESET_BTN: "Limpar",
    },
};

class UnknownMessageID extends Error {}

class UnknownLanguage extends Error {}

let currentLanguage = 'en_US';

function setCurrentLanguage(newCurrentLanguage) {
    currentLanguage = newCurrentLanguage;
}

function tr(messageID) {
   
    return userMessages[currentLanguage][messageID];
}
const trDoc = (function() {
    const trDocRe = /\{\{tr\s+(.*?)\}\}/g;
    return function trDoc(ancestorNode) {
        const textNodes = getTextNodesUnder(ancestorNode);
        textNodes.forEach(function(node) {
            node.nodeValue = node.nodeValue.replace(trDocRe, function(match, messageID) {
                return tr(messageID);
                
            });
        });
    };
})();


//acho que o "erro" ta aqui
function getTextNodesUnder(node) {
    const textNodes = [];
    const treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let currentNode;
    while (currentNode = treeWalker.nextNode()) {
        textNodes.push(currentNode);
      
    }
    return textNodes;
}