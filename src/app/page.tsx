'use client'
import { supabase } from '@/utils/supabase'

export default function Home() {
  const addHabit = async () => {
    const { data, error } = await supabase
      .from('habits')
      .insert([
        { title: 'Lire Napoleon Hill', description: '30 minutes par jour' }
      ])

    if (error) console.log('Erreur:', error)
    else console.log('Succès ! Habitude ajoutée:', data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Mon Empire d'Habitudes</h1>
      <button
        onClick={addHabit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
      >
        Lancer mon premier rituel de succès
      </button>
    </main>
  )
}