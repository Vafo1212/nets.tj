export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  };
  