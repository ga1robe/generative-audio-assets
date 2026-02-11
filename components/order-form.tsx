"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    mood: "",
    tempo: "",
    deadline: "",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="order" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Jak zamówić</h2>
          <p className="mt-4 text-lg text-muted-foreground">Wypełnij brief i otrzymaj wycenę w 24h</p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="bg-card p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię i nazwisko</Label>
                  <Input
                    id="name"
                    placeholder="Jan Kowalski"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Typ projektu</Label>
                <Input
                  id="projectType"
                  placeholder="np. Gra indie RPG, Reklama produktu"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="mood">Preferowany nastrój</Label>
                  <Input
                    id="mood"
                    placeholder="np. Epicki, Mroczny, Energiczny"
                    value={formData.mood}
                    onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tempo">Tempo (BPM)</Label>
                  <Input
                    id="tempo"
                    placeholder="np. 120-140"
                    value={formData.tempo}
                    onChange={(e) => setFormData({ ...formData, tempo: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Termin realizacji</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Dodatkowe informacje</Label>
                <Textarea
                  id="details"
                  placeholder="Opisz swoje potrzeby, preferencje dotyczące formatów, czy potrzebujesz automatyzacji..."
                  rows={5}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Wyślij brief
                <Send className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Odpowiemy w ciągu 24h z propozycją pakietu i wyceną
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
