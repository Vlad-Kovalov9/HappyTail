const colors = [
  "#E89E86",
  "#86E8C9",
  "#869EE8",
  "#AD86E8",
  "#E886C1",
  "#E88687",
  "#86DEE8",
];

export function getAvatarData(name) {
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";

  const getColorFromString = (str) => {
    if (!str) return colors[0];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const bgColor = getColorFromString(name);

  return { firstLetter, bgColor };
}
