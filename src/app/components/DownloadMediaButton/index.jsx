import { original } from "../../statics";

const DownloadMediaButton = ({ media, setDownloading, children }) => {
  const download = (id, url) => {
    setDownloading(true);

    fetch(url, {
      method: "GET",
      headers: {},
    }).then((res) => {
      res.arrayBuffer().then((buffer) => {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        console.log(url);
        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", ``);

        console.log("id = ", id);
        a.setAttribute("download", `${id.replace("/", "")}`);
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
          window.URL.revokeObjectURL(url);
          setDownloading(false);
        }, 100);
      });
    });
  };

  return (
    <button
      aria-label="download media"
      onClick={() => download(media, `${original}${media}`)}
    >
      {children}
    </button>
  );
};

export default DownloadMediaButton;
