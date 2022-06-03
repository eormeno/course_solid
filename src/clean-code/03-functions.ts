(() => {

    function getMovieById(movieId: string) {
        console.log({ movieId: movieId });
    }

    function getMovieCastById(movieId: string) {
        console.log({ id: movieId });
    }

    function getActorBioById(actorId: string) {
        console.log({ ActorId: actorId });
    }

    interface Movie {
        cast: string[]
        description: string
        rating: number
        title: string
    }

    interface Actor {
        birthDate: Date
        fullName: string
    }

    function createMovie({ cast, description, rating, title }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor({ fullName, birthDate }: Actor): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor ', birthDate);
        return true;
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500
        if (isSeparated) return 2500
        return ((isRetired) ? 3000 : 4000)
    }

})();