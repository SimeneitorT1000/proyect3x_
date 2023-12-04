const paginationLogic = (currentPage, residents) => {
    //?  cantidad de residentes por pagina
    const RESIDENTS_PER_PAGE = 15;
    //?  calculo de paginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

    //? RESIDENTES QUE SE DEBEN MOSTRAR POR PAGINA
    const sliceEnd = currentPage * RESIDENTS_PER_PAGE;
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
    const residentsIncurrentPage = residents.slice(sliceStart, sliceEnd);

    //? ARREGLO DE PÁGINAS A MOSTRARSE 
    const pages = [];
    for(let i = 1; i <= totalPages; i++){
        pages.push(i);
        }

        return {pages,residentsIncurrentPage}
    }

export {paginationLogic}; 