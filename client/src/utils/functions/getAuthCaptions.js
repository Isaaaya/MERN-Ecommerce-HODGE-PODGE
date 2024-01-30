
export const getAuthCaptions = (mode) => {
    if (mode === 'signup') return {
        heading: 'Create account',
        alternativePagePath: 'signin',
        goToAlternativePageLabel: "Already have an account?",
    };
    if (mode === 'signin') return {
        heading: 'Login',
        alternativePagePath: 'signup',
        goToAlternativePageLabel: "Don't have an account yet?",
    };
}
