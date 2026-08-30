export default function Video() {
  return (
    <div className="overflow-clip relative rounded-[16px] w-full h-full" data-name="Video">
      <video
        autoPlay
        loop
        playsInline
        muted
        controls
        controlsList="nodownload"
        className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
      >
        <source src="/_videos/v1/12e6437b09d223c2200dd80f04e774edbdaeeed4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}