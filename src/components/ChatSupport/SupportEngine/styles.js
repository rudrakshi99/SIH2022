import logo from '../../../img/logo.png';
export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundImage: `url(${logo})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '84px',
        // Size
        width: '84px',
        height: '84px',
    },
    avatarHello: { 
        // Position
        position: 'absolute', 
        left: 'calc(-100% - 44px - 28px)', 
        top: 'calc(50% - 24px)', 
        // Layering
        zIndex: '10000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        backgroundColor: '#68AC5D',
        color: 'black',
    },
    supportWindow: {
        // Position
        position: 'fixed',
        bottom: '116px',
        right: '24px',
        // Size
        width: '420px',
        height: '530px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid #68AC5D`,
        overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    },
    emailFormWindow: { 
        width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '308px',
        backgroundColor: '#68AC5D',
        transform: 'skewY(-12deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '15%', 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: '600',
    },
    emailInput: { 
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid #68AC5D',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '70%', 
        color: '#68AC5D', 
        fontSize: '24px', 
        fontWeight: '600' 
    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'white',
    },
    loadingIcon: { 
        color: '#68AC5D', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}