'use client';

export const Map = () => {
  return (
    <div className="md:w-[535px] xl:w-[634px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2585.923397025346!2d34.5265463!3d49.599194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82601f34ac947%3A0xbb948724f7cf0b61!2z0JPQvtGC0LXQu9GM0L3Qvi3RgNC10YHRgtC-0YDQsNC90L3QuNC5INC60L7QvNC_0LvQtdC60YEgItCc0ZbQvNGW0L3QviI!5e0!3m2!1suk!2sua!4v1716980457235!5m2!1suk!2sua"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full max-w-full h-[320px] md:h-[412px] border-0"
      ></iframe>
    </div>
  );
};
