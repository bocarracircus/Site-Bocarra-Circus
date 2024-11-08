import { useState, ChangeEvent, FormEvent } from 'react';
import InputTelefone from './input-telefone';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Separador from '../components/separador';
import { motion } from 'framer-motion';

const Formulario = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { x: '-200%', opacity: 0 },
    visible: { x: ['-100%', 0], opacity: 1, transition: { duration: 0.38 } },
  };
  const item2 = {
    hidden: { x: '200%', opacity: 0 },
    visible: { x: ['100%', 0], opacity: 1, transition: { duration: 0.38 } },
  };
  const itemY = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.38 } },
  };

  const [nome, setNome] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleTelefoneChange = (value: string) => {
    setTelefone(value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMensagemChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMensagem(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
      telefone: telefone,
    };
    console.log('Dados do formulário:', templateParams);
    emailjs.send("service_eql1imr", "template_3pphr1d", templateParams, "RDLWamZqO7vQAXuRs")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        setEmail('');
        setMensagem('');
        setNome('');
        setTelefone('');
      }, (err) => {
        console.log("Erro: ", err);
      });
  };

  const apiWhatsapp = "https://api.whatsapp.com/send?phone=5519989884254&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <section className='flex w-full bg-blue-default py-16 justify-center'>
      <motion.div
        className='w-maxW max-w-hd grande:max-w-grande overflow-hidden'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Separador />

        <motion.h2 className='text-[white] mb-12' variants={item}>Entre em contato</motion.h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-16 w-full'>

          <motion.div className='flex w-full gap-16 flex-col' variants={itemY}>
            <h5 className='text-white-contraste w-maxW'>
              Envie uma mensagem pelo formulário ou entre em contato por um de nossos canais de atendimento.
            </h5>

            <div className='flex-col gap-4 w-maxW flex'>
              <p className="flex items-center gap-2 mb-1 text-white-contraste">
                <SiGmail className='text-[white]' /> contato@bocarracircus.com
              </p>
              <a href={apiWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white-contraste">
                <FaWhatsapp className='text-[white]' />(19) 98988-4254
              </a>
            </div>
          </motion.div>

          <motion.section
            className='flex flex-col md:flex-row gap-32 w-full'
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
          
            <motion.div className='flex w-maxW max-w-[400px] flex-col gap-16' variants={item} >
           
              <label htmlFor="nome" className="w-full max-w-[400px] text-red-default text-xl">
                Nome completo
                <input
                  className='w-full mt-3 pb-2 bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none'
                  placeholder="Digite seu nome"
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={handleNomeChange}
                  required
                />
              </label>

              <label htmlFor="telefone" className="w-full max-w-[400px] text-red-default text-xl">
                Telefone
                <InputTelefone
                  classe={'w-full mt-3 pb-2 bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none'}
                  onChange={handleTelefoneChange}
                />
              </label>

              <label htmlFor="email" className="w-full max-w-[400px] text-red-default text-xl">
                Email
                <input
                  className='w-full mt-3 pb-2 bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none'
                  placeholder="Digite seu email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </label>
            </motion.div>

            <motion.div className='flex-grow w-maxW max-w-[400px] flex flex-col min-h-80' variants={item2}>
              <label htmlFor="message" className="w-full text-red-default text-xl flex-grow flex flex-col">
                Mensagem
                <textarea
                  className='w-full mt-3 flex-grow bg-transparent border-b text-[white] placeholder:text-white-contraste focus:outline-none resize-none'
                  placeholder="Digite uma mensagem"
                  id="message"
                  value={mensagem}
                  onChange={handleMensagemChange}
                  required
                />
              </label>
            </motion.div>
          </motion.section>

          <div className='flex w-maxW'>
            <button
              type="submit"
              className='w-fit text-[white] bg-red-default hover:bg-red-hover px-5 py-2 uppercase  rounded-lg font-medium'
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

export default Formulario;
