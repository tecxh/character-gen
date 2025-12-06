import type { PropsWithChildren } from "react"
// container / wrapper element for screens
// provides shared styles

export const CommonScreen = ({ children} :PropsWithChildren) => {
    return (
        <div style={{ backgroundColor: 'black', padding: '2rem', borderRadius: '15px' }}>
            {children}
        </div>
    )
}