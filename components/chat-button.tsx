"use client"

import { useState } from "react"
import { MessageCircle, Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brandConfig } from "@/config/brand-config"

export default function ChatButton() {
    const [open, setOpen] = useState(false)

    // Read URLs directly from brand config
    const instagramUrl = brandConfig.socialMedia?.find(
        (s) => s.name?.toLowerCase() === "instagram"
    )?.url || "https://instagram.com/"

    const whatsappUrl = brandConfig.socialMedia?.find(
        (s) => s.name?.toLowerCase() === "whatsapp"
    )?.url || "#"

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Expanded actions */}
            {open && (
                <div className="flex flex-col items-end space-y-2 mb-2">
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                            <Phone className="h-4 w-4" />
                            WhatsApp
                        </a>
                    </Button>
                    <Button asChild className="bg-pink-600 hover:bg-pink-700">
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Instagram">
                            <Instagram className="h-4 w-4" />
                            Instagram
                        </a>
                    </Button>
                </div>
            )}

            {/* FAB */}
            <Button
                onClick={() => setOpen((v) => !v)}
                className="rounded-full h-14 w-14 shadow-lg bg-purple-600 hover:bg-purple-700"
                aria-label={open ? "Close chat options" : "Open chat options"}
            >
                <MessageCircle className="h-6 w-6" />
            </Button>
        </div>
    )
}