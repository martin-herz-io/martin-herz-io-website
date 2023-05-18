// React imports
import React from 'react'

// Properties
export type props = {
    name: string;
    type?: string;
    className?: string;
    title?: string;
}

// Icons import
import { get_ionic_line_icon, get_ionic_sharp_icon, get_ionic_solid_icon } from '../../library/ionic'; // Ionic Icons

// Component
export const Icon: React.FC<props> = ({ name, type, className = 'w-5', title }) => {
    let SvgIcon

    if (!type) { type = 'solid' }
    if (type === 'solid') {
        SvgIcon = get_ionic_solid_icon(name)
    }
    if (type === 'sharp') {
        SvgIcon = get_ionic_sharp_icon(name)
    }
    if (type === 'line') {
        SvgIcon = get_ionic_line_icon(name)
    }

    return <SvgIcon className={className} title={title} />
}