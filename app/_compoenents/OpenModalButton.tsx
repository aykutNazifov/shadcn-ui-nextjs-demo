"use client"

import { Button } from '@/components/ui/button'
import { useTestModal } from '@/hooks/useTestModal'
import React from 'react'

const OpenModalButton = () => {
    const { open } = useTestModal()
    return (
        <div>
            <Button onClick={open}>Open Modal</Button>
        </div>
    )
}

export default OpenModalButton