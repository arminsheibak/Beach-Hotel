
interface Room {
  sys: { id: string};
  fields: {
      name: string,
      slug: string,
      type: string,
      price: number,
      size: number,
      capacity: number,
      pets: boolean,
      breakfast: boolean,
      featured: boolean,
      description: string,
      extras: string[],
      images:{
        fields: {
          file: {
            url: string;
          }
        }
      }[],
  };
}

export default Room;