export const VIDEO_CATEOGRIAS = {
  Frontend: "Frontend",
  Backend: "Backend",
  InnovacionGestion: "Innovación y gestión",
};

export const VIDEO_CATEOGRIAS_LIST = Object.values(VIDEO_CATEOGRIAS);

export const categoriasColorMapper = {};

categoriasColorMapper[VIDEO_CATEOGRIAS.Frontend] = "#6BD1FF";
categoriasColorMapper[VIDEO_CATEOGRIAS.Backend] = "#00C86F";
categoriasColorMapper[VIDEO_CATEOGRIAS.InnovacionGestion] = "#FFBA05";

export const categoriasTituloMapper = {};

categoriasTituloMapper[VIDEO_CATEOGRIAS.Frontend] = "FRONT END";
categoriasTituloMapper[VIDEO_CATEOGRIAS.Backend] = "BACK END";
categoriasTituloMapper[VIDEO_CATEOGRIAS.InnovacionGestion] = "INNOVACIÓN Y GESTIÓN";