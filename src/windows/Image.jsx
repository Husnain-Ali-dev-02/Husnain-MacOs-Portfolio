import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const ImageWindowContent = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;
  // ensure we always have a usable title for header and alt text
  const title = name ?? "Untitled image";

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{title}</h2>
      </div>

      <div className="p-5 bg-white overflow-auto">
        {imageUrl && (
          <div className="w-full flex justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-full max-h-[75vh] object-contain rounded"
              />
          </div>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageWindow;
