const Avatar = ({ service, size, userName }) => {

    const url = `https://unavatar.io/${service}/${userName}`

    return (
    <img
      src={url}
      alt={`${userName} avatar`}
      style={{borderRadius: '50%', width: `${size}px`, height: `${size}px`}}
    />
  );
};

export default Avatar;
