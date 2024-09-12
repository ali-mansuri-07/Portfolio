/**
 * Formats a date object to "YYYY-MM-DD".
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string.
 */
const formatDate = (date) => {
    if (!date) return null;
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    console.log("Date = "+ `${year}-${month}-${day}`);
  
    return `${year}-${month}-${day}`;
  };
  
  module.exports = { formatDate };