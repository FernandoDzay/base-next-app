import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui"



type Props = {
    children: React.ReactNode
}

const layout:React.FC<Props> = ({ children }) => {
    
    
    return (
        <>
            <RedirectToSignIn />
            <SignedIn>
                {children}
            </SignedIn>
        </>
    )
}

export default layout