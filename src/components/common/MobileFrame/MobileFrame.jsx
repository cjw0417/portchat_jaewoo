import "./MobileFrame.scss";

export default function MobileFrame({ src, title, emptyMessage }) {
  return (
    <div className="mobile-frame">
      <div className="mobile-frame__device">
        <span className="mobile-frame__notch" />
        <div className="mobile-frame__screen">
          {src ? (
            <iframe
              src={src}
              title={title}
              className="mobile-frame__iframe"
            />
          ) : (
            <div className="mobile-frame__empty">
              <p>{emptyMessage ?? "모바일 데모 준비 중입니다."}</p>
            </div>
          )}
        </div>
        <span className="mobile-frame__home-bar" />
      </div>
    </div>
  );
}
