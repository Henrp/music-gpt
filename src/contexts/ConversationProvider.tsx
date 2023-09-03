"use client";

import { ConversationContextType } from "@/types/ContextTypes";
import { useState, createContext, useContext, ReactNode } from "react";

// 1. Create a context
const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

// 2. Create a provider
type Props = {
    children: ReactNode
}

export function ConversationProvider({ children }: Props ) {
    const [ isConversationStarted, setIsConversationStarted ] = useState(false);

    const contextValue: ConversationContextType = {
        isConversationStarted,
        setIsConversationStarted
    }

    return (
        <ConversationContext.Provider value={contextValue}>
            {children}
        </ConversationContext.Provider>
    )
}

export function useConversationContext() {
    const context = useContext(ConversationContext)
    if (context === undefined) {
        throw new Error("useConversationContext must be used within a ConversationProvider")
    }

    return context;
}