'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function submitContact(formData) {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message) {
    redirect('/?error=missing');
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from('contacts')
    .insert({ name, email, message });

  if (error) {
    console.error('Supabase insert failed:', error);
    redirect('/?error=db');
  }

  redirect('/thanks');
}
