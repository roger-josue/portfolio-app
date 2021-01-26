import emailjs, { init } from 'emailjs-com'

const user_id = 'user_UQwpAFBf5qcAIAGDxTGuK';
const formTemplate = 'contact_form';
const emailService = 'service_owoqtjg';
init( user_id );


export const sendEmail = async(e) => {
    try {
        
        const send = await emailjs.sendForm( emailService, formTemplate, e.target, user_id);
        
        return send;
    } catch (error) {
        throw error;
    }

}