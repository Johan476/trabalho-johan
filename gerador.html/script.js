// Array com 100 mensagens de elogios
const elogios = [
    "Você é uma pessoa incrível!",
    "Seu sorriso ilumina o ambiente!",
    "Você faz a diferença na vida das pessoas!",
    "Sua dedicação é inspiradora!",
    "Você tem um coração generoso!",
    "Seu trabalho é sempre excepcional!",
    "Você transmite positividade a todos ao seu redor!",
    "Sua inteligência é admirável!",
    "Você é uma fonte de inspiração!",
    "Seu entusiasmo é contagiante!",
    "Você é muito especial!",
    "Seu jeito de ser encanta!",
    "Você é muito querido(a) por todos!",
    "Suas palavras são sempre reconfortantes!",
    "Você é um exemplo de superação!",
    "Seu carisma é único!",
    "Você sempre enxerga o melhor nas pessoas!",
    "Seu esforço é inspirador!",
    "Você é muito talentoso(a)!",
    "Sua honestidade é admirável!",
    "Você tem um coração de ouro!",
    "Seu otimismo é contagiante!",
    "Você é uma pessoa muito determinada!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito amável!",
    "Seu apoio é sempre bem-vindo!",
    "Você é muito habilidoso(a)!",
    "Sua criatividade é impressionante!",
    "Você é uma pessoa muito carinhosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você tem um grande senso de responsabilidade!",
    "Sua humildade é inspiradora!",
    "Você é muito focado(a)!",
    "Sua gentileza é admirável!",
    "Você é uma pessoa muito generosa!",
    "Seu jeito de resolver problemas é incrível!",
    "Você é muito eficiente no que faz!",
    "Seu trabalho é sempre impecável!",
    "Você é uma pessoa muito confiável!",
    "Sua determinação é inspiradora!",
    "Você sempre tem uma palavra de conforto!",
    "Você é muito atencioso(a)!",
    "Sua capacidade de liderança é notável!",
    "Você é uma pessoa muito corajosa!",
    "Seu senso de justiça é admirável!",
    "Você tem um sorriso cativante!",
    "Sua perseverança é inspiradora!",
    "Você é uma pessoa muito criativa!",
    "Seu talento é extraordinário!",
    "Você é muito inspirador(a)!",
    "Sua ética de trabalho é exemplar!",
    "Você é uma pessoa muito prestativa!",
    "Seu jeito de pensar fora da caixa é impressionante!",
    "Você é muito eloquente!",
    "Sua dedicação aos seus objetivos é admirável!",
    "Você é uma pessoa muito resiliente!",
    "Seu compromisso com a excelência é notável!",
    "Você é muito articulado(a)!",
    "Sua visão de futuro é inspiradora!",
    "Você é uma pessoa muito visionária!",
    "Seu bom gosto é admirável!",
    "Você é muito paciente com os outros!",
    "Sua sabedoria é impressionante!",
    "Você é uma pessoa muito perspicaz!",
    "Seu caráter é exemplar!",
    "Você tem uma habilidade incrível para resolver problemas!",
    "Sua paciência com os desafios é admirável!",
    "Você é uma pessoa muito centrada!",
    "Seu conhecimento é vasto e valioso!",
    "Você é muito responsável em suas decisões!",
    "Sua integridade é inabalável!",
    "Você é uma pessoa muito ponderada!",
    "Seu amor pela aprendizagem é inspirador!",
    "Você é muito inspirador(a) para os outros!",
    "Sua capacidade de adaptação é notável!",
    "Você é uma pessoa muito confiável!",
    "Seu cuidado com os detalhes é impressionante!",
    "Você é muito talentoso(a) naquilo que faz!",
    "Sua visão estratégica é admirável!",
    "Você é uma pessoa muito intuitiva!",
    "Seu senso de humor é contagiante!",
    "Você é muito cativante!",
    "Sua persistência é inspiradora!",
    "Você é uma pessoa muito amiga!",
    "Seu jeito de resolver conflitos é admirável!",
    "Você é muito corajoso(a)!",
    "Sua liderança é inspiradora!",
    "Você tem um jeito único de inspirar os outros!",
    "Sua atenção aos detalhes é admirável!",
    "Você é uma pessoa muito criativa!",
    "Seu jeito de resolver problemas é admirável!",
    "Você é muito talentoso(a)!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
    "Sua empatia faz a diferença!",
    "Você é uma pessoa muito prestativa!",
    "Seu comprometimento é exemplar!",
    "Você é uma pessoa muito generosa!",
    "Seu bom humor alegra o ambiente!",
    "Você é uma pessoa muito paciente!",
];

function gerarMensagem() {
    const indiceAleatorio = Math.floor(Math.random() * elogios.length);
    const mensagem = elogios[indiceAleatorio];
    document.getElementById('mensagemExibida').textContent = mensagem;
}

function limparMensagem() {
    document.getElementById('mensagemExibida').textContent = '';
}