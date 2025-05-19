import { supabase } from "./supabaseService";


export async function submitRSVP(data: { nome: any; email: any; telefone: any; comparecimento: any; mensagem: any; }) {
  try {
    const { error } = await supabase.from('rsvp').insert([{
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      comparecimento: data.comparecimento,
      mensagem: data.mensagem || null
    }]);

    if (error) throw error;
    return true;
  } catch (err: any) {
    console.error('Erro ao enviar RSVP:', err.message);
    return false;
  }
}