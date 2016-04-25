-- phpMyAdmin SQL Dump
-- version 4.0.10.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.3.100.2:3306
-- Tempo de Geração: 14/04/2016 às 02:01
-- Versão do servidor: 5.5.45
-- Versão do PHP: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `bancodados`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `comissoes`
--

CREATE TABLE IF NOT EXISTS `comissoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `nomeComissao` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `descricaoComissao` varchar(255) NOT NULL,
  `grupoComissao` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Fazendo dump de dados para tabela `comissoes`
--

INSERT INTO `comissoes` (`id`, `idUnidade`, `nomeComissao`, `endereco`, `telefone`, `email`, `descricaoComissao`, `grupoComissao`) VALUES
(1, 1, 'Direitos Humanos', 'Rua Anchieta, 35 - 1º andar CEP - 01016-900 ', '(11) 3244-2362 à 2365', 'direitos.humanos@oabsp.org.br', '<p>Plantão de atendimento ao público todas as quartas-feiras, a partir das 13h30 (Necessário agendamento prévio com uma semana de antecedência) através dos nossos telefones ou e-mail.</p><h6>Coordenador</h6>\r\n<ul><li>Martim de Almeida Sampaio</li></ul>', 'Permanentes'),
(2, 1, 'Advocacia Pública', 'Praça da Sé, 385 - 4º andar', 'Fone: (11) 3291-8212<br/>Fax: (11) 3291-8171', 'advocacia.publica@oabsp.org.br', '<h6>Presidente</h6><ul><li>Carlos Figueiredo Mourão</li></ul>', 'Especiais'),
(3, 1, 'Defesa do consumidor', 'Praça da Sé, 385 - 4º andar', '(11) 3291-8212', 'defesa.consumidor@oabsp.org.br  ', '<h6>Presidente</h6><ul><li>Marco Antonio Araújo Junior</li></ul>', 'Permanentes'),
(4, 1, 'Agronegócios', 'Praça da Sé, 385 - 4º andar', '(11) 3291-8212', 'agronegocios@oabsp.org.br', '<h6>Presidente</h6><ul><li>Carlos Figueiredo Mourão</li></ul>', 'Especiais'),
(5, 1, 'Assistência judiciária', 'Rua Anchieta, 35 - 2º andar CEP - 01016-900', '3244-2276', 'assistencia.judiciaria@oabsp.org.br', '<h6>Presidente</h6><ul><li>Aislan de Queiroga Trigo</li></ul>', 'Especiais'),
(6, 1, 'Cultura e eventos', 'Praça da Sé, 385 - 10º andar CEP - 01001-902', '(11) 3291-8190 / 8191', 'cultura.eventos@oabsp.org.br', '<h6>Diretor</h6><ul><li>Umberto Luiz Borges D´Urso</li></ul>', 'Especiais'),
(7, 1, 'Meio ambiente', 'Praça da Sé, 385 - 4º andar', '(11) 3291-8212', 'meio.ambiente@oabsp.org.br', '<h6>Diretor</h6><ul><li>Umberto Luiz Borges D´Urso</li></ul>', 'Permanentes'),
(8, 1, 'Estágio', 'Rua Anchieta, 35 - 3º andar CEP - 01016-900', '(11) 3244-2334 / 2335', 'exame.ordem@oabsp.org.br', '<h6>Presidente</h6><ul><li>Carlos Figueiredo Mourão</li></ul>', 'Permanentes'),
(9, 1, 'Obras e patrimônio', 'Rua Anchieta, 35 - 3º andar CEP - 01016-900', '(11) 3244-2326', 'exame.ordem@oabsp.org.br', '<h6>Presidente</h6><ul><li>Antonio Carlos Delgado Lopeso</li></ul>', 'Permanentes'),
(10, 4, 'Advocacia Pública', 'Praça da Sé, 385 - 4º andar', 'Fone: (11) 3291-8212\r\nFax: (11) 3291-8171', 'advocacia.publica@oabsp.org.br', 'Presidente - Carlos Figueiredo Mourão \r\n\r\n', ''),
(11, 4, 'Advogado Assalariado', 'Praça da Sé, 385 - 4º andar', 'Fone: (11) 3291-8212\r\nFax: (11) 3291-8171', 'advogado.assalariado@oabsp.org.br', 'Presidente - Aldimar de Assis\r\n\r\n', ''),
(12, 4, 'Acadêmico de Direito', 'Praça da Sé, 385 - 5º andar', 'Fone: (11) 3291-8212\r\nFax: (11) 3291-8171', 'academico.direito@oabsp.org.br', '<h6>Presidente</h6><ul><li>Aleksander Mendes Zakimi </li></ul>', 'Especiais'),
(13, 4, 'Assistência Judiciária', 'Rua Anchieta, 35 - 2º andar CEP - 01016-900', 'Fone: (11) 3244-2276\r\nFax: (11) 3244-2266', 'assistencia.judiciaria@oabsp.org.br', '<h6>Presidente</h6><ul><li>Aislan de Queiroga Trigo</li></ul>', 'Especiais'),
(14, 4, 'Cooperativismo', 'Praça da Sé, 385 - 4º andar', 'cooperativismo@oabsp.org.br', 'cooperativismo@oabsp.org.br', '<h6>Presidente</h6><ul><li>Antonio Carlos Delgado Lopeso</li></ul>', 'Especiais');

-- --------------------------------------------------------

--
-- Estrutura para tabela `eventos`
--

CREATE TABLE IF NOT EXISTS `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `dataInicio` date NOT NULL,
  `local` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Fazendo dump de dados para tabela `eventos`
--

INSERT INTO `eventos` (`id`, `idUnidade`, `nome`, `dataInicio`, `local`) VALUES
(1, 1, 'Palestra: O Marketing Político a Serviço dos Candidatos', '2006-10-15', 'OAB Guarulhos'),
(7, 2, 'Palestra: O Marketing Político a Serviço dos Candidatos', '2015-03-01', 'OAB Santos'),
(8, 3, 'Palestra: O Marketing Político a Serviço dos Candidatos', '2015-03-02', 'OAB Osasco'),
(9, 1, 'Comemorações Externas Dia da Mulher', '2015-03-07', 'OAB Guarulhos'),
(10, 2, 'Comemorações Externas Dia da Mulher', '2015-03-07', 'OAB Santos'),
(11, 3, 'Comemorações Externas Dia da Mulher', '2015-03-07', 'OAB Osasco'),
(12, 3, 'Comemorações Internas Dia da Mulher Bazar e Chá da Tarde', '2015-03-07', 'OAB Guarulhos'),
(13, 1, 'História da OAB', '2016-04-29', 'OAB Guarulhos'),
(14, 1, 'Aspectos gerais do novo CPC Aguaí', '2016-03-30', 'OAB Guarulhos'),
(15, 1, 'Os desafios do novo CPC ', '2016-03-30', 'OAB Guarulhos'),
(16, 1, 'Alterações do novo Código de Ética', '2016-03-22', 'OAB Guarulhos'),
(17, 1, 'Provas no novo CPC', '2016-03-18', 'OAB Guarulhos'),
(18, 1, 'Direito previdenciário', '2016-03-22', 'OAB Guarulhos'),
(19, 1, 'Cálculos trabalhistas', '2016-03-14', 'OAB Guarulhos'),
(20, 4, 'Prática no Processo Judicial Eletrônico', '2016-04-21', 'OAB SP'),
(21, 4, 'Comunhão e Condomínio – Confusão de Conceitos', '2016-04-22', 'OAB SP'),
(22, 4, 'Condomínios e Consórcios Agrários', '2016-04-28', 'OAB SP'),
(23, 4, 'Jurisprudência do Processo Eletrônico na Justiça Comum', '2016-04-25', 'OAB SP');

-- --------------------------------------------------------

--
-- Estrutura para tabela `galeria`
--

CREATE TABLE IF NOT EXISTS `galeria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idEvento` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `urlImagem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Fazendo dump de dados para tabela `galeria`
--

INSERT INTO `galeria` (`id`, `idEvento`, `descricao`, `urlImagem`) VALUES
(1, 1, 'img1', 'http://oabguarulhos.org.br/uploads/album/1954306487.JPG'),
(2, 1, 'img2', 'http://oabguarulhos.org.br/uploads/album/997493055.JPG'),
(3, 1, 'img3', 'http://oabguarulhos.org.br/uploads/album/1782631178.JPG'),
(4, 1, 'img4', 'http://oabguarulhos.org.br/uploads/album/1911044036.JPG'),
(5, 1, 'img5', 'http://oabguarulhos.org.br/uploads/album/528547399.JPG'),
(6, 1, 'Evento', 'http://www.oabsp.org.br/noticias/galeria-de-fotos/congresso-processo-civil/congresso-de-processo-civil-em-evento-realizado-pelo-departamento-de-cultura-e-eventos-da-oabsp-realizado-no-teatro-gazeta-data-20-03-2015-4'),
(7, 1, 'Evento', 'http://www.oabsp.org.br/noticias/plateia-novo-cpc/image'),
(8, 21, 'Evento na OAB SP', 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi97rHPgI3MAhUCgZAKHQpAA74QjRwIBw&url=http%3A%2F%2Fwww.oabsp.org.br%2Fnoticias%2Fgaleria-de-fotos%2Fpalestra-de-afif-domingos-sobre-o-supersimples%2FGuilherme%25'),
(9, 21, 'Evento na OAB SP ', 'http://oabcampinas.org.br/site/wp-content/uploads/2016/01/posse-sp.jpg'),
(10, 21, 'Evento na OAB SP', 'http://oabcampinas.org.br/site/wp-content/uploads/2016/01/posse-sp.jpg'),
(11, 23, 'Evento na OAB', 'http://www.caasp.org.br/Admin/imagens_Noticia/posse%202016%20oab.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `informativo`
--

CREATE TABLE IF NOT EXISTS `informativo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `data` datetime NOT NULL,
  `autor` varchar(100) NOT NULL,
  `tipo` tinyint(4) NOT NULL,
  `mensagem` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Fazendo dump de dados para tabela `informativo`
--

INSERT INTO `informativo` (`id`, `idUnidade`, `titulo`, `data`, `autor`, `tipo`, `mensagem`) VALUES
(1, 1, 'Comemorações Externas Dia da Mulher', '2016-03-07 00:00:00', 'OAB Guarulhos', 1, '<b>Bazar em comemoração ao dia da Mulher</b><br>\n    07 e 08 de março das 9h00 as 18h00<br>\n    <br>\n    <b>Chá da tarde</b><br>\n    08 de março a partir das 16h00<br>\n    <br>\n    Local: Sede da Subseção Guarulhos<br>\n    Endereço: Rua Ipê, 201<br>\n    <br>\n    Inscrições online:<br>\n    <a href="http://www.oabguarulhos.org.br/index.php?cont=54&id=439#form" title="Clique aqui para abrir o site de inscrição" target="_blank">\n    http://www.oabguarulhos.org.br/index.php?cont=54&id=439#form\n    </a>'),
(2, 1, 'Certificação Digital - Informações importantes', '2015-10-20 00:00:00', 'Dr. Antony Nelson Tauil Brito', 2, '<a href="http://www.oabsp.org.br/ac-oab/" target="_blank" title="Clique aqui para abrir o link externo">\n    Clique aqui para comprar seu Certificado Digital AC OAB\n    </a><br>\n    <br>\n    <a href="https://gestaoar.certisign.com.br/AgendamentoOnLine/cliente/actionPedido.action" target="_blank">\n    Agende aqui sua validação do Certificado\n    </a><br>\n    <p>\n    Desde 1&ordm; de janeiro de 2012, entrou em operação a nova versão do Autoridade Certificadora Raiz da ICP-Brasil.</p>\n    <p>\n    A tecnologia da AC Raiz, chamada de V2, possui padrões criptográficos de 2048 bits - mais fortes que a anterior de 1028 bits.</p>\n    <p>\n    Você advogado, que solicitou sua Carteira de Identidade a partir de junho/2011, já está preparado para receber o Novo Certificado Digital.</p>\n    <p>\n    Os advogados que emitiram a Carteira de Identidade antes do mês de junho/2011 deverão procurar a Seccional ou Subseção para solicitar novo modelo de Carteira de Identidade ou cartão criptográfico ou token, antes de solicitar o seu certificado digital.</p>\n    <p>\n    Certificado Digital OAB tem validade de 03 anos.</p>\n    <p>\n    Dúvidas podem ser esclarecidas com a Certisign - São Paulo: (11) 3478-9444 - e-mail: sac@certisign.com.br</p>\n    <h2>ATENÇÂO:<h2>\n    <p>\n    1- Situação com a Entidade: o advogado deverá estar regular com a OAB;</p>\n    <p>\n    2- Processo de Emissão: o certificado digital OAB somente poderá ser emitido na carteira profissional do advogado ou cartão criptográfico OAB ou em token homologado pelo ITI;</p>\n    <p>\n    3- Validação e Senha: tenha atenção ao memorizar a senha do seu certificado digital OAB no momento de validação presencial. Por questões de segurança, quando há 03 tentativas sem sucesso na digitação da senha, o chip do seu cartão é automaticamente bloqueado, resultando na perda do certificado digital.</p>\n    <p>\n    Caso isso ocorra, haverá a necessidade de aquisição de um novo certificado digital e possivelmente de uma nova carteira de identidade profissional, acarretando em ônus adicional para o advogado.</p>\n    <p>\n    Apoio e Coordenação:<br></p>\n    <b>Dr. Antony Nelson Tauil Brito<br>\n    Presidente da Comissão de Informatica Jurídica da OAB Guarulhos</b>'),
(3, 1, 'Convite (PJ-e-JT) - Em pauta: mau funcionamento do sistema Judicial Eletrônico da Justiça do Trabalho', '2016-02-27 19:08:00', 'Alexandre de Sá Domingues', 2, '<p>\n    A Comissão de Relações com o Poder Judiciário da 57ª Subseção – Guarulhos da Ordem dos Advogados do Brasil, Seção São Paulo, em consideração às inúmeras reclamações recebidas acerca do mau funcionamento do sistema Judicial Eletrônico da Justiça do Trabalho (PJ-e-JT), bem como a proximidade das Correições Ordinárias programadas para o início do mês de março, nas Varas do Trabalho de Guarulhos, vem, CONVIDAR os colegas advogados que fazem uso deste sistema, para que no próximo dia 03/03/16 às 14h, compareçam em nossa subseção para juntos elaborarmos uma pauta de reinvindicações, sugestões e críticas acerca do referido sistema.</p>\n    <p>\n    <b>Data: 03/03/2016 às 14h</b>\n    Local: Auditório da Subseção Guarulhos\n    Endereço: Rua Ipê, n&ordm; 201 - 2&ordm; andar</p>'),
(4, 1, 'Segunda Câmara', '2016-03-22 00:00:00', 'OAB Guarulhos', 1, '<b>Segunda Câmara</b><br>\r\n    11 de Abril às 08:30<br>\r\n    <br>\r\n    <b>PAUTA</b><br>\r\n    <ul>\r\n<li>I – verificação do quorum e abertura;</li>\r\n<li>II – leitura, discussão e aprovação da ata da sessão anterior;</li>\r\n<li>III – comunicações do Presidente;</li>\r\n    </ul><br>\r\n    <br>\r\n    Local: Edifício-sede do Conselho Federal da OAB - Brasília<br>\r\n    Endereço: Plenário da Segunda Câmara – 4º andar<br>\r\n    <br>\r\n '),
(5, 1, 'Palestra com a Dra. Pamella Gabriel Baptista', '2016-03-16 00:00:00', 'OAB GUarulhos', 2, '<p>\r\n\r\n<b>PALESTRA COM  A DRA. PAMELLA GABRIEL BAPTISTA</b><br/>\r\nAdvogada; Especialista em Direito Processual Civil pela UNISANTOS e Especialista em Bioética pela USP; Pesquisadora do Grupo de Pesquisa em Bioética, Direito e Medicina GBDM/USP; Pósgraduanda em Direito Imobiliário pela Escola Paulista de Direito; Professora convidada na Pós-Graduação Lato Sensu de Direito Processual da UNISANTOS.\r\n</p>\r\n    <p>\r\n    <b>Data: 05/06/2016 às 19h</b>\r\n    Local: Auditório da Subseção Guarulhos\r\n    Endereço: Rua Ipê, n&ordm; 201 - 2&ordm; andar</p>'),
(6, 4, 'Mario Sérgio Cortella fala sobre gestão do conhecimento na OAB SP', '2016-04-20 00:00:00', 'OAB SP', 2, 'O auditório do prédio da OAB SP na Praça da Sé recebe na quarta-feira (13/04), a partir das 20h00, o renomado filósofo, doutor em Educação e escritor, Mário Sérgio Cortella. O educador vai apresentar a palestra “Gestão do conhecimento: um desafio necessário” que destaca a importância do aprendizado contínuo tanto para as pessoas quanto para as organizações. \r\n\r\nO assunto será abordado levando em consideração três aspectos: “Não nascemos sabendo! Ainda bem”; “Educação, conhecimento e competência coletiva” e "Conhecimento, flexibilidade e comprometimento".\r\n\r\nAs inscrições devem ser feitas no atendimento, ou por meio do link abaixo, e mediante a doação de uma lata ou pacote de leite em pó: http://www2.oabsp.org.br/asp/cultura/cultura05.asp?pgv=a&id_cultural=18070.'),
(7, 4, 'Conselho Federal inicia julgamento da eleição da OAB de Santos', '2016-04-11 00:00:00', 'OAB SP', 2, 'Os recursos contra a cassação da chapa 2 na disputa eleitoral da OAB Santos, presidida pelo advogado Rodrigo Julião, começaram a ser apreciados pelo Conselho Federal da Ordem dos Advogados do Brasil.\r\n\r\nO relator do processo, Pedro Henrique Braga Reynaldo Alves, conselheiro federal por Pernambuco, proferiu voto no sentido de entender que as violações das regras eleitorais pela chapa 2 estavam demonstradas e comprovadas, de forma que mantém as decisões da Comissão Eleitoral da OAB SP. No entanto, entende o relator que, por não ter a Chapa 1 alcançado mais de 50% dos votos válidos – segundo os números apresentados ao Conselho Federal –, deveria ser convocada nova eleição.\r\n\r\nEm paralelo, o TRF da 3ª Região concedeu efeito suspensivo ao recurso de apelação interposto por Rodrigo Julião, para que a diretoria da gestão anterior permaneça dirigindo a OAB Santos, até decisão sobre a chapa vencedora.\r\n\r\nOs mandados de segurança que Rodrigo Julião impetrou na 1ª Instância tiveram sentença denegando a ordem e validando as decisões da Comissão Eleitoral da OAB SP, que cassara o registro da Chapa 2, por ele presidida.'),
(8, 4, 'Advocacia obtém tutela antecipada para sociedades unipessoais no Supersimples', '2016-04-28 00:00:00', 'OAB SP', 2, 'A Ordem dos Advogados do Brasil teve hoje (12/04) um importante pedido da classe atendido pela Justiça federal: as sociedades unipessoais de advocacia serão contempladas pelo sistema tributário simplificado de tributação, o Supersimples, que é um programa do governo que unifica vários impostos e reduzindo a carga tributária. “Ao apreciar o pedido de antecipação de tutela a magistrada invocou o princípio da confiança, ressaltando que parcela expressiva dos advogados aguardavam a concretude da norma para ingresso no sistema Supersimples”, disse o presidente Marcos da Costa, esclarecendo ainda que a OAB SP colaborou com o Conselho Federal e com o presidente Claudio Lamachia na propositura da ação, inclusive com o parecer do jurista Heleno Torres, que gentilmente apresentou seu estudo para auxiliar na definição da medida adotada.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `link`
--

CREATE TABLE IF NOT EXISTS `link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Fazendo dump de dados para tabela `link`
--

INSERT INTO `link` (`id`, `idUnidade`, `nome`, `link`) VALUES
(1, 1, 'ANATEL - Agência Nacional de Telecomunicações', 'http://www.anatel.gov.br/'),
(2, 1, 'Banco Central', 'http://www.bcb.gov.br/'),
(3, 1, 'Banco do Brasil', 'http://www.bancodobrasil.com.br/'),
(4, 3, 'STF - Supremo Tribunal Federal', 'http://www.stf.gov.br/'),
(5, 1, 'OAB Conselho Federal', 'http://www.oab.org.br/'),
(6, 4, 'Banco do Brasil', 'http://www.bancodobrasil.com.br/'),
(7, 4, 'OAB SP', 'http://www.oab.org.br/');

-- --------------------------------------------------------

--
-- Estrutura para tabela `localizacao`
--

CREATE TABLE IF NOT EXISTS `localizacao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `nomeUnidade` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Fazendo dump de dados para tabela `localizacao`
--

INSERT INTO `localizacao` (`id`, `idUnidade`, `nome`, `endereco`, `numero`, `cep`, `telefone`, `nomeUnidade`) VALUES
(1, 1, 'Casa do Advogado', 'Rua Ipê', '201', '07090-130', '+55 (11) 2468-8199', 'Guarulhos'),
(2, 2, 'OAB Subseção Santos', 'Praça José Bonifácio', '55', '11013-190', '(13) 3226-5900', 'Santos'),
(3, 4, 'OAB SP', 'Rua Maria Paula', '35', '01016-900', '(11) 2155-3737', 'OAB SP');

-- --------------------------------------------------------

--
-- Estrutura para tabela `parceiros`
--

CREATE TABLE IF NOT EXISTS `parceiros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `nomeCategoria` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `site` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `atendimento` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `desconto` varchar(255) NOT NULL,
  `urlImagem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Fazendo dump de dados para tabela `parceiros`
--

INSERT INTO `parceiros` (`id`, `idUnidade`, `nomeCategoria`, `nome`, `telefone`, `site`, `endereco`, `numero`, `atendimento`, `descricao`, `desconto`, `urlImagem`) VALUES
(1, 1, 'Academias e Suplementos', 'ACM UNIDADE GUARULHOS', '(11) 2472-5600', 'http://www.acmsaopaulo.org/', 'Rua Assis Chateaubriand', '205', 'Segunda a sexta-feira das 06h00min às 22h00min. Aos sábados e domingos pedimos que seja verificado diretamente com o parceiro.', 'Os associados e beneficiários podem participar de diferentes eventos nas áreas cultural, social, ambiental e de educação física, em um ambiente familiar e de muita amizade!', 'Condições diferenciadas para Advogados, Estagiários de Direito e funcionários da OAB Guarulhos , nos serviços disponíveis. ATENÇÃO: VÁLIDO APENAS PARA A UNIDADE GUARULHOS!', 'http://acmrio.org.br/wp-content/themes/acm/images/logo.png'),
(2, 1, 'Cursos', 'Mackenzie', '(11) 2114-8823 ', 'http://mackenzie.com.br', 'Rua da Consolação', '896', 'Segunda a sexta-feira das 06h00min às 22h00min. Aos sábados e domingos pedimos que seja verificado diretamente com o parceiro.', 'Descontos nas mensalidades de cursos da Pós-Graduação e de extensão.', '10% para os cursos de Pós Graduação (Lato Sensu) e em cursos de Extensão.', 'https://www.caasp.org.br/imagens/Parceiros/mackenzie.JPG'),
(3, 1, 'Turismo/Viagens', 'CVC Turismo', '(11) 3586-4858 ', 'http://cvc.com.br', 'Rua Relíquia', '383', 'Segunda a sexta, das 08hs às 20hrs', 'Até 7% de desconto sobre o valor do pacote de viagem operados pela CVC dependendo da forma de pagamento (Nacional, Internacional, Passagem Aérea e Hospedagem no sistema On Line CVC), exceto taxas . Este desconto não está disponível nas demais lojas. Consu', 'Até 7% de desconto sobre o valor do pacote de viagem operados pela CVC dependendo da forma de pagamento (Nacional, Internacional, Passagem Aérea e Hospedagem no sistema On Line CVC), exceto taxas . Este desconto não está disponível nas demais lojas. Consu', 'https://www.caasp.org.br/ADMIN/imagens/cvc.JPG'),
(4, 1, 'Turismo/Viagens', 'Tam Viagens', '(11) 3670-3800', 'http://www.tamviagens.com.br/#&panel1-1', 'Rua Cerro Cora', '1850', 'De segunda à sábado, das 07hrs às 21 hrs', 'Desconto de 10% na compra de pacote de viagem anunciados no site.\r\n(Pacote de Viagem pode ser considerado somente hotel ou hotel/aéreo ou hotel/aéreo/traslado ou hotel/aéreo/traslado).', 'Desconto de 10% na compra de pacote de viagem anunciados no site.\r\n(Pacote de Viagem pode ser considerado somente hotel ou hotel/aéreo ou hotel/aéreo/traslado ou hotel/aéreo/traslado).', 'https://www.caasp.org.br/imagens/Parceiros/tam_.JPG'),
(5, 1, 'Cursos', 'CNA Idiomas', '(11) 3291-9432', 'https://www.cna.com.br/', 'Avenida Lins de Vasconcelos', '890', 'De segunda à sexta, das 9hrs às 23hrs', 'O desconto não é cumulativo com outras promoções eventualmente existentes nas unidades da Rede CNA à época da matrícula ou rematrícula do beneficiário.\r\nDesconto não se aplica à taxa de matrícula, ao material didático e não é retroativo.', 'Desconto de 30% para o 1°módulo semestral a ser cursado e 15% para o segundo módulo e seguintes, sobre o valor normal das parcelas relativas aos cursos de inglês e espanhol ministrados pelas unidades franqueadas na rede CNA.', 'https://www.caasp.org.br/ADMIN/imagens/CNA_Definitivo.png'),
(6, 4, 'OAB SP', 'Página de parceiros', '(11) 2155-3737', 'http://www.oabsp.org.br/', 'Rua Maria Paula', '35', '(11) 2155-3737', 'OAB SP', 'OAB SP', 'http://www.oabsp.org.br/++theme++tema-oab-sp-ajuste-posicao-do-feed/img/logo.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `portaria`
--

CREATE TABLE IF NOT EXISTS `portaria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Fazendo dump de dados para tabela `portaria`
--

INSERT INTO `portaria` (`id`, `idUnidade`, `nome`, `texto`, `data`) VALUES
(1, 1, 'N.º 02/2016', 'Renomeia comissão, altera cargo de comissão, nomeia e destitui, O Advogado ALEXANDRE DE SÁ DOMINGUES, inscrito na Seção de São Paulo, da Ordem dos  Advogados  do  Brasil,  sob  o  n.º  164.098,  eleito e  empossado  Presidente  da  57.ª Subseção de Guarul', '2016-03-01'),
(2, 2, 'N.º 01/2016', 'http://www.oabguarulhos.org.br/anexos/PORTARIA%2001-2016.pdf', '2016-01-25'),
(3, 1, 'N.º 03/2016', 'O Presidente da Ordem dos Advogados do Brasil, no uso de suas\r\natribuições, e na forma do quanto dispõe o art. 65, inciso XX, do Regimento Interno da\r\nSeccional, resolve nomear o advogado Joaquim Valter Santos Júnior – OAB/BA nº.\r\n15309, na função de Dire', '2016-03-16'),
(4, 1, 'N.º 04/2016', 'Considerando a necessidade de instituir critérios para os links das páginas das Comissões Especiais da OAB/SP, para que seu funcionamento se dê de forma sistematizada, \r\n \r\nConsiderando que junto ao Organograma da Seccional compete à Vice-Presidência coor', '2016-03-16'),
(5, 4, 'N.º 03/2016', 'O Doutor Toru Yamamoto, Juiz Federal Coordenador, em exercício, do Fórum Criminal da Justiça Federal de Primeiro Grau em São Paulo, no uso\nde suas atribuições legais e regulamentares;\n\nCONSIDERANDO o disposto nos artigos 1º e 2º da Portaria nº 008/2005', '2016-04-21');

-- --------------------------------------------------------

--
-- Estrutura para tabela `telefones_uteis`
--

CREATE TABLE IF NOT EXISTS `telefones_uteis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUnidade` int(11) NOT NULL,
  `departamentoTelefone` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Fazendo dump de dados para tabela `telefones_uteis`
--

INSERT INTO `telefones_uteis` (`id`, `idUnidade`, `departamentoTelefone`, `telefone`) VALUES
(1, 1, 'ASSESSORIA DE IMPRENSA', ' 3291-4953'),
(2, 1, 'ASSESSORIA DE IMPRENSA - FAX', ' 3291-8180'),
(3, 1, 'CARTIFICAÇÃO DIGITAL', '(11) 3035–7298'),
(4, 1, 'CONSELHO FEDERAL', '(11) 2193-9607'),
(5, 1, 'FAJ', '(11) 3349-7715'),
(6, 1, 'DEPARTAMENTO DE EVENTOS', '(11) 3035-7243'),
(7, 4, 'OAB São Paulo', '(11) 2155-3737'),
(8, 4, 'Sede Administrativa', '(11) 2155-3737');

-- --------------------------------------------------------

--
-- Estrutura para tabela `unidades`
--

CREATE TABLE IF NOT EXISTS `unidades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) NOT NULL,
  `subsecao` int(11) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `ativo` tinyint(1) unsigned DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Fazendo dump de dados para tabela `unidades`
--

INSERT INTO `unidades` (`id`, `cidade`, `subsecao`, `estado`, `ativo`) VALUES
(1, 'Guarulhos', 57, 'SP', 1),
(2, 'Santos', 2, 'SP', 1),
(3, 'Osasco', 56, 'SP', 1),
(4, 'São Paulo', 1, 'SP', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
