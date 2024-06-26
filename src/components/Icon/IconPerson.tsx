import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
const IconPerson = () => {

  const balloonRef = useRef<SVGGElement>(null);
  const firstBox = useRef<SVGRectElement>(null);

  useEffect(() => {
    const balloonElement = balloonRef.current;
    if (balloonElement) {
      const balloonTimeline = gsap.timeline();

      // Animación de entrada
      balloonTimeline.fromTo(
        balloonElement,
        { opacity: 0, y: -100, scale: 0 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }
      );

      // Animación de oscilación
      balloonTimeline.to(balloonElement, {
        rotation: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
      });

      // Animación de salida
      balloonTimeline.to(
        balloonElement,
        { opacity: 0, y: 100, scale: 0, duration: 0.5, delay: 1, ease: 'power2.in' },
        '-=0.5'
      );

      // Detener la animación al desmontar el componente
      return () => {
        balloonTimeline.kill();
      };
    }
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="810" height="840" viewBox="0 0 810 840">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectángulo_5" data-name="Rectángulo 5" width="810" height="840" transform="translate(960 120)" fill="rgba(255,255,255,0)"/>
    </clipPath>
  </defs>
  <g id="Icono" transform="translate(-960 -120)" clipPath="url(#clip-path)">
    <g id="Checking_boxes-rafiki" data-name="Checking boxes-rafiki" transform="translate(960 149.126)">
      <g id="freepik--background-complete--inject-11">
        <rect id="Rectángulo_6" data-name="Rectángulo 6" width="810" height="0.405" transform="translate(0 619.488)" fill="none"/>
        <rect id="Rectángulo_7" data-name="Rectángulo 7" width="53.654" height="0.405" transform="translate(675.184 645.554)" fill="none"/>
        <rect id="Rectángulo_8" data-name="Rectángulo 8" width="14.078" height="0.405" transform="translate(522.499 649.96)" fill="none"/>
        <rect id="Rectángulo_9" data-name="Rectángulo 9" width="31.088" height="0.405" transform="translate(642.476 630.52)" fill="none"/>
        <rect id="Rectángulo_10" data-name="Rectángulo 10" width="69.968" height="0.405" transform="translate(84.985 633.242)" fill="none"/>
        <rect id="Rectángulo_11" data-name="Rectángulo 11" width="10.255" height="0.405" transform="translate(169.387 633.242)" fill="none"/>
        <rect id="Rectángulo_12" data-name="Rectángulo 12" width="151.762" height="0.405" transform="translate(212.981 640.078)" fill="none"/>
        <path id="Trazado_2" data-name="Trazado 2" d="M383.94,547.236H71.134a9.25,9.25,0,0,1-9.234-9.25V98.269A9.25,9.25,0,0,1,71.134,89.1H383.94a9.25,9.25,0,0,1,9.25,9.25V537.986A9.25,9.25,0,0,1,383.94,547.236ZM71.134,89.424a8.845,8.845,0,0,0-8.829,8.845V537.986a8.845,8.845,0,0,0,8.829,8.845H383.94a8.862,8.862,0,0,0,8.845-8.845V98.269a8.861,8.861,0,0,0-8.845-8.845Z" fill="none"/>
        <path id="Trazado_3" data-name="Trazado 3" d="M734.362,547.236H421.54a9.266,9.266,0,0,1-9.25-9.25V98.269a9.266,9.266,0,0,1,9.25-9.169H734.362a9.25,9.25,0,0,1,9.218,9.169V537.986A9.25,9.25,0,0,1,734.362,547.236ZM421.54,89.424a8.861,8.861,0,0,0-8.845,8.845V537.986a8.861,8.861,0,0,0,8.845,8.845H734.362a8.862,8.862,0,0,0,8.845-8.845V98.269a8.861,8.861,0,0,0-8.845-8.845Z" fill="none"/>
        <rect id="Rectángulo_13" data-name="Rectángulo 13" width="266.409" height="236.39" transform="translate(453.195 120.933)" fill="none"/>
        <rect id="Rectángulo_14" data-name="Rectángulo 14" width="252.72" height="223.56" transform="translate(459.853 127.413)" fill="none"/>
        <path id="Trazado_4" data-name="Trazado 4" d="M519.178,127.413,459.853,350.487V245.673l31.315-118.26Z" fill="none"/>
        <path id="Trazado_5" data-name="Trazado 5" d="M540.173,127.413l-59.827,223.56H470.8l59.827-223.56Z" fill="none"/>
        <path id="Trazado_6" data-name="Trazado 6" d="M712.573,268.483V304.2l-12.1,46.769H690.93Z" fill="none"/>
        <rect id="Rectángulo_15" data-name="Rectángulo 15" width="4.261" height="232.567" transform="translate(543.753 123.395)" fill="none"/>
        <rect id="Rectángulo_16" data-name="Rectángulo 16" width="4.261" height="232.567" transform="translate(626.243 123.395)" fill="none"/>
        <rect id="Rectángulo_17" data-name="Rectángulo 17" width="146.885" height="131.722" transform="translate(84.985 487.701)" fill="none"/>
        <rect id="Rectángulo_18" data-name="Rectángulo 18" width="51.127" height="131.722" transform="translate(84.985 487.701)" fill="none"/>
        <rect id="Rectángulo_19" data-name="Rectángulo 19" width="146.885" height="131.722" transform="translate(114.21 358.684)" fill="none"/>
        <rect id="Rectángulo_20" data-name="Rectángulo 20" width="51.127" height="131.722" transform="translate(114.21 358.684)" fill="none"/>
        <rect id="Rectángulo_21" data-name="Rectángulo 21" width="146.885" height="131.722" transform="translate(84.985 227.351)" fill="none"/>
        <rect id="Rectángulo_22" data-name="Rectángulo 22" width="51.127" height="131.722" transform="translate(84.985 227.351)" fill="none"/>
        <rect id="Rectángulo_23" data-name="Rectángulo 23" width="146.885" height="131.722" transform="translate(244.831 487.814)" fill="none"/>
        <rect id="Rectángulo_24" data-name="Rectángulo 24" width="51.127" height="131.722" transform="translate(244.831 487.814)" fill="none"/>
        <rect id="Rectángulo_25" data-name="Rectángulo 25" width="146.885" height="82.507" transform="translate(261.095 408.029)" fill="none"/>
        <rect id="Rectángulo_26" data-name="Rectángulo 26" width="51.127" height="82.507" transform="translate(261.095 408.029)" fill="none"/>
        <rect id="Rectángulo_27" data-name="Rectángulo 27" width="94.9" height="131.722" transform="translate(249.691 277.684)" fill="none"/>
        <rect id="Rectángulo_28" data-name="Rectángulo 28" width="33.032" height="131.722" transform="translate(249.691 277.684)" fill="none"/>
        <rect id="Rectángulo_29" data-name="Rectángulo 29" width="146.885" height="131.722" transform="translate(708.232 619.666) rotate(180)" fill="none"/>
        <rect id="Rectángulo_30" data-name="Rectángulo 30" width="51.127" height="131.722" transform="translate(708.232 619.666) rotate(180)" fill="none"/>
        <rect id="Rectángulo_31" data-name="Rectángulo 31" width="146.885" height="107.228" transform="translate(678.991 490.649) rotate(180)" fill="none"/>
        <rect id="Rectángulo_32" data-name="Rectángulo 32" width="51.127" height="107.228" transform="translate(679.007 490.649) rotate(180)" fill="none"/>
        <rect id="Rectángulo_33" data-name="Rectángulo 33" width="141.653" height="52.488" transform="translate(708.232 383.422) rotate(180)" fill="none"/>
        <rect id="Rectángulo_34" data-name="Rectángulo 34" width="49.297" height="52.488" transform="translate(708.248 383.422) rotate(180)" fill="none"/>
      </g>
      <g id="freepik--Shadow--inject-11">
        <ellipse id="freepik--path--inject-11" cx="314.102" cy="18.338" rx="314.102" ry="18.338" transform="translate(90.898 655.97)" fill="rgba(145,145,145,0)"/>
      </g>
      <g id="freepik--bubble-speech--inject-11" ref={balloonRef} >
        <rect id="Rectángulo_35" data-name="Rectángulo 35" width="59.762" height="55.566" rx="7.339" transform="translate(527.31 178.119)" fill="#61a5c2"/>
        <path id="Trazado_7" data-name="Trazado 7" d="M551.351,226.622s3.775,18.257,29.5,28.382c0,0-15.73-10.06-14.758-28.382Z" fill="#61a5c2"/>
        <path id="Trazado_8" data-name="Trazado 8" d="M544.255,204.331l8.537,11.858,17.334-20.558" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.86"/>
      </g>
      <g id="freepik--character-2--inject-11">
        <path id="Trazado_9" data-name="Trazado 9" d="M635.9,242.06c7.922,5.686,15.082,15.406,9.72,42.622s-6.723,33.7-6.723,33.7l-51.84-5.832s-2.43-24.089,1.62-46.753C594.151,236.52,612.7,225.391,635.9,242.06Z" fill="#263238"/>
        <path id="Trazado_10" data-name="Trazado 10" d="M584.01,392.445s-17.561,93.555-22.243,132c-6.124,50.123-31.153,123.444-31.153,123.444l10.012,2.592s35.284-62.321,42.12-118.373c28.026-57.3,30.294-127.867,30.294-127.867Z" fill="#eec1bb"/>
        <path id="Trazado_11" data-name="Trazado 11" d="M511.92,670.567a14.466,14.466,0,0,1,5.135-1.3h0s6.156-3.629,12.247-17.69h6.869a5.67,5.67,0,0,1,5.265,3.775,3.243,3.243,0,0,1,.194.956,39.032,39.032,0,0,1-.535,4.86,137.516,137.516,0,0,1-4,16.2l-1.166-.308,2.106-10.222c.713-3.483-2.948-.13-4.633,3.386s-4.228,6.934-11.761,5.314C512.762,673.434,509.215,672.154,511.92,670.567Z" fill="#263238"/>
        <path id="Trazado_12" data-name="Trazado 12" d="M541.7,655.484c1.3-3.321,2.948-9.266,2.948-9.266l-14.693-2.041s0,7.225-2.722,11.956C534.908,656.1,541.7,655.484,541.7,655.484Z" fill="#263238"/>
        <path id="Trazado_13" data-name="Trazado 13" d="M602.235,390.955s2.187,95.175,5.54,133.731c4.39,50.317-4.941,127.235-4.941,127.235l10.336.454s21.627-68.267,16.767-124.546c15.568-61.852,3.24-131.35,3.24-131.35Z" fill="#eec1bb"/>
        <path id="Trazado_14" data-name="Trazado 14" d="M586.764,673.709a14.58,14.58,0,0,1,4.973-1.863h0s5.719-4.261,10.271-18.905l6.8-.778a5.654,5.654,0,0,1,5.654,3.24,3.079,3.079,0,0,1,.292.923,39.206,39.206,0,0,1,0,4.973,136.962,136.962,0,0,1-2.252,16.459l-1.183-.162.988-10.4c.324-3.532-2.932.194-4.244,3.872s-3.515,7.452-11.227,6.48C587.866,676.463,584.188,675.54,586.764,673.709Z" fill="#263238"/>
        <path id="Trazado_15" data-name="Trazado 15" d="M614.677,655.484c.923-3.434,1.928-9.526,1.928-9.526l-14.823-.437s.778,7.177-1.409,12.182C607.986,656.813,614.677,655.484,614.677,655.484Z" fill="#263238"/>
        <path id="Trazado_16" data-name="Trazado 16" d="M580.268,376.828l-19.262,133.2s62.726,9.72,87.836,4.034c0,0,6.172-76.9-20.039-132.84Z" fill="#263238"/>
        <path id="Trazado_17" data-name="Trazado 17" d="M522.288,329.735l-16.767-16.556s-.567-4.439-2.2-5.67-13.106-5.411-14.58-4.487-3.37,10.222-1.393,11.923,12.425,3.872,13.495,3.694L519.032,340.2Z" fill="#eec1bb"/>
        <path id="Trazado_18" data-name="Trazado 18" d="M582.293,299.554c-7.225,3.839-32.886,39.706-36.661,41.472s-32.659-21.643-32.659-21.643l-4.86,8.311S531.8,361.26,545.195,359.64s39.042-29.97,39.042-29.97Z" fill="#61a5c2"/>
        <path id="Trazado_19" data-name="Trazado 19" d="M582.293,299.554c-7.225,3.839-32.886,39.706-36.661,41.472s-32.659-21.643-32.659-21.643l-4.86,8.311S531.8,361.26,545.195,359.64s39.042-29.97,39.042-29.97Z" fill="#fff" opacity="0.1"/>
        <path id="Trazado_20" data-name="Trazado 20" d="M514.561,320.274l-2.009-1.9-5.265,8.91,1.9,3.645Z" fill="#61a5c2"/>
        <path id="Trazado_21" data-name="Trazado 21" d="M573.934,340.054c5.994-5.719,10.3-10.465,10.3-10.465l-.454-7.128-2.2-6.917a28.431,28.431,0,0,0-7.646,24.511Z" opacity="0.2"/>
        <path id="Trazado_22" data-name="Trazado 22" d="M579.863,375.467c-2.025-35.64-1.118-55.274-.194-65.075,1.021-10.449,2.624-10.838,2.624-10.838s11.34-1.1,21.173-1.021a159.755,159.755,0,0,1,22.68,2.4A150.9,150.9,0,0,1,647.206,306c-1.15,3.24-2.187,6.48-3.159,9.331-1.28,3.872-2.43,7.452-3.483,10.805-1.944,6.253-3.467,11.664-4.666,16.508a179.822,179.822,0,0,0-5.395,37.26s12.458,32.562,14.888,56.457l-41.31,4.455-5.67-23.895-5.67,24.7-23.085-8.1Z" fill="#61a5c2"/>
        <path id="Trazado_23" data-name="Trazado 23" d="M579.863,375.467c-2.025-35.64-1.118-55.274-.194-65.075,1.021-10.449,2.624-10.838,2.624-10.838s11.34-1.1,21.173-1.021a159.755,159.755,0,0,1,22.68,2.4A150.9,150.9,0,0,1,647.206,306c-1.15,3.24-2.187,6.48-3.159,9.331-1.28,3.872-2.43,7.452-3.483,10.805-1.944,6.253-3.467,11.664-4.666,16.508a179.822,179.822,0,0,0-5.395,37.26s12.458,32.562,14.888,56.457l-41.31,4.455-5.67-23.895-5.67,24.7-23.085-8.1Z" fill="#fff" opacity="0.1"/>
        <path id="Trazado_24" data-name="Trazado 24" d="M633.89,351.378c.551-2.722,1.2-5.621,1.993-8.732.5-1.976,1.053-4.05,1.62-6.253-1.62-5.524-3.24-1.2-3.24-1.2A49.878,49.878,0,0,0,633.89,351.378Z" opacity="0.2"/>
        <path id="Trazado_25" data-name="Trazado 25" d="M604.033,300.7a13.716,13.716,0,0,1,1.539-.664c1.166-.923,2.592-3.143,2.527-8.537a46.486,46.486,0,0,0-.6-6.383l15.017-2.8s-5.119,10.109-.859,17.626c1.474.648,2.349,1.62,2.187,2.8-1.118,8.667-19.78,17.059-19.78,17.059S594.977,305.678,604.033,300.7Z" fill="#eec1bb"/>
        <path id="Trazado_26" data-name="Trazado 26" d="M607.5,285.12a46.5,46.5,0,0,1,.583,6.334c10.141,0,14.434-9.137,14.434-9.137Z" opacity="0.2"/>
        <path id="Trazado_27" data-name="Trazado 27" d="M615.811,243.178c-13.057-.713-17.642,6.043-19.327,19.44-2.122,16.751.956,28.9,17.48,26.212C636.4,285.12,637.5,244.361,615.811,243.178Z" fill="#eec1bb"/>
        <path id="Trazado_28" data-name="Trazado 28" d="M604.957,262.44a27.538,27.538,0,0,1-4.1,5.2,3.58,3.58,0,0,0,3.37,1.62Z" fill="#d4827d"/>
        <path id="Trazado_29" data-name="Trazado 29" d="M613.008,261.727c0,1.069.421,1.993,1.134,2.041s1.361-.761,1.458-1.831-.437-1.993-1.15-2.041S613.089,260.658,613.008,261.727Z" fill="#263238"/>
        <path id="Trazado_30" data-name="Trazado 30" d="M614.741,259.961l-2.252-1.085S613.494,260.917,614.741,259.961Z" fill="#263238"/>
        <path id="Trazado_31" data-name="Trazado 31" d="M599.708,260.464c-.081,1.069.421,1.976,1.134,2.041s1.377-.761,1.458-1.847-.437-1.976-1.15-2.041S599.789,259.394,599.708,260.464Z" fill="#263238"/>
        <path id="Trazado_32" data-name="Trazado 32" d="M601.441,258.7l-2.252-1.1S600.194,259.654,601.441,258.7Z" fill="#263238"/>
        <path id="Trazado_33" data-name="Trazado 33" d="M613.64,252.72A6.772,6.772,0,0,1,619.18,255" fill="none" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.112"/>
        <path id="Trazado_34" data-name="Trazado 34" d="M604.26,251.651a6.091,6.091,0,0,0-5.265.778" fill="none" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.112"/>
        <path id="Trazado_35" data-name="Trazado 35" d="M628.884,265.972s-5.524-11.065-4.147-19.294c0,0-25.288-11.988-28.01,14.191,0,0-1.247-23.458,21.222-22.68s20.574,33.55,8.456,42.7C626.405,280.827,632.286,272.889,628.884,265.972Z" fill="#263238"/>
        <path id="Trazado_36" data-name="Trazado 36" d="M626.6,268.612a5.735,5.735,0,0,1,6.48-4.86c4.018.664,5.492,9.088-4.682,10.53C626.94,274.444,626.179,272.986,626.6,268.612Z" fill="#eec1bb"/>
        <path id="Trazado_37" data-name="Trazado 37" d="M614.417,272.273a10.514,10.514,0,0,1-7.5,3.029" fill="none" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.112"/>
        <path id="Trazado_38" data-name="Trazado 38" d="M624.737,246.677s-28.22-7.339-30.586,19.116" fill="none" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.112"/>
        <path id="Trazado_39" data-name="Trazado 39" d="M599.562,307.136s-2.155,21.449,1.377,40.97c0,0,8.327-30.164,20.023-40.419l-13.446,1.928Z" fill="#61a5c2"/>
        <path id="Trazado_40" data-name="Trazado 40" d="M599.562,307.136s-2.155,21.449,1.377,40.97c0,0,8.327-30.164,20.023-40.419l-13.446,1.928Z" fill="#fff" opacity="0.5"/>
        <path id="Trazado_41" data-name="Trazado 41" d="M621.157,297.594,607.5,307.687V296.962s-11.032,4-10.255,16.2L606.3,309v4.163l2.122-4.018,7.16,8.181s8.764-10.222,9.72-13.3S621.157,297.594,621.157,297.594Z" fill="#61a5c2"/>
        <path id="Trazado_42" data-name="Trazado 42" d="M621.157,297.594,607.5,307.687V296.962s-11.032,4-10.255,16.2L606.3,309v4.163l2.122-4.018,7.16,8.181s8.764-10.222,9.72-13.3S621.157,297.594,621.157,297.594Z" fill="#fff" opacity="0.7"/>
        <path id="Trazado_43" data-name="Trazado 43" d="M635.413,392.234l-12.539-59.827a2.786,2.786,0,0,0-2.722-2.219H581.58a1.944,1.944,0,0,0-1.912,2.284l10.449,58.579a2.77,2.77,0,0,0,2.657,2.3l40.775,1.215a1.944,1.944,0,0,0,1.863-2.333Z" fill="#263238"/>
        <path id="Trazado_44" data-name="Trazado 44" d="M635.413,392.234l-12.539-59.827a2.786,2.786,0,0,0-2.722-2.219H581.58a1.944,1.944,0,0,0-1.912,2.284l10.449,58.579a2.77,2.77,0,0,0,2.657,2.3l40.775,1.215a1.944,1.944,0,0,0,1.863-2.333Z" fill="#fff" opacity="0.1"/>
        <path id="Trazado_45" data-name="Trazado 45" d="M652.082,372.859,632.14,360.288s-1.523-4.2-3.37-5.054-13.964-2.462-15.147-1.247-1.085,10.692,1.215,11.939,12.96,1.1,13.964.7l22.34,17.107Z" fill="#eec1bb"/>
        <path id="Trazado_46" data-name="Trazado 46" d="M647.206,306s-12.96,18.922-11.129,35.122l17.285,28.609L641.747,363.8l-5.265,9.914s13.365,20.59,30.375,15.73S647.206,306,647.206,306Z" fill="#61a5c2"/>
        <path id="Trazado_47" data-name="Trazado 47" d="M647.206,306s-12.96,18.922-11.129,35.122l17.285,28.609L641.747,363.8l-5.265,9.914s13.365,20.59,30.375,15.73S647.206,306,647.206,306Z" fill="#fff" opacity="0.1"/>
        <path id="Trazado_48" data-name="Trazado 48" d="M642.962,363.253l-6.61,12.3-1.49-3.515,5.265-10Z" fill="#61a5c2"/>
        <path id="Trazado_49" data-name="Trazado 49" d="M618.84,330.188c-1.523,0-1.523,39.852-1.523,39.852l-34.83-1s-3.92-33.7,0-38.88Z" fill="#fff"/>
        <path id="Trazado_50" data-name="Trazado 50" d="M618.84,330.188c-1.523,0-1.523,39.852-1.523,39.852l-34.83-1s-3.92-33.7,0-38.88Z" opacity="0.1"/>
        <path id="Trazado_51" data-name="Trazado 51" d="M474.984,298.615l32.935,13.851a1.474,1.474,0,0,1,.761,1.944h0a1.442,1.442,0,0,1-1.9.745l-33.145-14.045-.308-.162-3.856-2.867,5.071.437a1.426,1.426,0,0,1,.437.1Z" fill="#263238"/>
      </g>
      <g id="freepik--character-1--inject-11">
        <g id="freepik--group--inject-11">
          <path id="Trazado_52" data-name="Trazado 52" d="M365.715,366.881l-31.995,2.851-12.83-7.241s-41.148-22.923-51.84-30.164c-3.24-2.219-6.269-7.047-8.878-12.717a128.086,128.086,0,0,1-5.638-14.953c-.729-2.284-1.377-4.471-1.928-6.48-1.231-4.325-1.993-7.565-2.2-8.44h0a.794.794,0,0,0,0-.211h.081l10.141-3.24L269.1,283.6s.389,2.009,1.053,5.071l.583,2.705c.178.778.356,1.62.551,2.462,2.138,9.428,5.427,22.291,7.808,24.4,3.839,3.386,52.115,36.288,53.833,37.147s17.091,0,17.091,0Z" fill="#e4897b"/>
          <path id="Trazado_53" data-name="Trazado 53" d="M250.144,244.1c14.742-.227,24.122,45.457,24.122,45.457l-19.44,9.72a62.24,62.24,0,0,1-8.343-31.46C246.937,250.29,250.144,244.1,250.144,244.1Z" fill="#61a5c2"/>
          <path id="Trazado_54" data-name="Trazado 54" d="M250.144,244.1c14.742-.227,24.122,45.457,24.122,45.457l-19.44,9.72a62.24,62.24,0,0,1-8.343-31.46C246.937,250.29,250.144,244.1,250.144,244.1Z" fill="#fff" opacity="0.5"/>
          <path id="Trazado_55" data-name="Trazado 55" d="M276.421,290.45l-5.249,3.4-6.853,4.439-9.85,6.367-1.766,1.15-2.138-6.5,1.976-1.069,1.3-.713,9.007-4.909,7.193-3.937,3.6-1.96.632-.34Z" fill="#61a5c2"/>
          <path id="Trazado_56" data-name="Trazado 56" d="M265.194,305.807a20.93,20.93,0,0,1-5.087,13.8,128.063,128.063,0,0,1-5.638-14.953l-1.766,1.15-2.138-6.48,1.976-1.069c-1.231-4.325-1.993-7.565-2.2-8.44h0v-.259l2.333-17.82a86.8,86.8,0,0,1,7.808,14.58c.842,1.993,1.62,4.115,2.333,6.318q.373,1.134.68,2.333c.308,1.1.567,2.219.794,3.337a42.121,42.121,0,0,1,.907,7.5Z" opacity="0.2"/>
          <path id="Trazado_57" data-name="Trazado 57" d="M247.941,663.163,261.5,664.6l2.543-29.241-13.559-1.442Z" fill="#e4897b"/>
          <path id="Trazado_58" data-name="Trazado 58" d="M180.306,662.175h13.122l1.085-30.424H181.375Z" fill="#e4897b"/>
          <path id="Trazado_59" data-name="Trazado 59" d="M195.259,660.652H179.3a1.166,1.166,0,0,0-1.118.907l-2.592,11.7a1.928,1.928,0,0,0,1.49,2.3,1.264,1.264,0,0,0,.421,0c5.168,0,8.926-.389,15.406-.389,4,0,16.054.405,21.562.405s6.237-5.443,3.969-5.945c-10.125-2.2-17.82-5.265-21.06-8.1A3.24,3.24,0,0,0,195.259,660.652Z" fill="#263238"/>
          <path id="Trazado_60" data-name="Trazado 60" d="M196.166,662.483a.324.324,0,0,1-.243-.275.292.292,0,0,1,.146-.292c.47-.308,4.714-2.916,6.172-2.155a.891.891,0,0,1,.535.859,1.863,1.863,0,0,1-.648,1.62,3.9,3.9,0,0,1-2.527.68,15.271,15.271,0,0,1-3.434-.437Zm.891-.437a6.334,6.334,0,0,0,4.682-.243,1.312,1.312,0,0,0,.421-1.118c0-.243-.113-.356-.211-.356a.647.647,0,0,0-.389-.081,12.651,12.651,0,0,0-4.5,1.8Z" fill="#61a5c2"/>
          <path id="Trazado_61" data-name="Trazado 61" d="M196.02,662.58a.34.34,0,0,1-.146-.292c0-.178.34-3.953,1.863-5.184a1.62,1.62,0,0,1,1.312-.4,1.021,1.021,0,0,1,1,.81c.259,1.393-2.365,4.277-3.71,5.022H196.2a.324.324,0,0,1-.178.049Zm2.106-5.119a7.484,7.484,0,0,0-1.62,4.115c1.361-1.021,3.029-3.24,2.867-4.066,0-.081,0-.308-.454-.308h-.146a1.134,1.134,0,0,0-.6.227Z" fill="#61a5c2"/>
          <path id="Trazado_62" data-name="Trazado 62" d="M262.926,660.247H246.969a1.15,1.15,0,0,0-1.118.891l-2.592,11.7a1.944,1.944,0,0,0,1.49,2.3h.437c5.152-.1,8.91-.405,15.406-.405,3.985,0,16.038.421,21.546.421s6.237-5.459,3.985-5.962c-10.125-2.2-17.82-5.249-21.06-8.1A3.241,3.241,0,0,0,262.926,660.247Z" fill="#263238"/>
          <path id="Trazado_63" data-name="Trazado 63" d="M263.833,662.062a.324.324,0,0,1-.243-.275.276.276,0,0,1,.162-.292c.47-.308,4.714-2.916,6.156-2.155a.923.923,0,0,1,.535.859,1.847,1.847,0,0,1-.648,1.62,4,4,0,0,1-2.495.761A15.409,15.409,0,0,1,263.833,662.062Zm.891-.437a6.48,6.48,0,0,0,4.682-.227,1.3,1.3,0,0,0,.421-1.118c0-.259-.113-.373-.194-.373a.7.7,0,0,0-.4-.081A12.96,12.96,0,0,0,264.724,661.624Z" fill="#61a5c2"/>
          <path id="Trazado_64" data-name="Trazado 64" d="M263.752,662.126a.34.34,0,0,1-.162-.275c0-.194.34-3.969,1.863-5.2a1.62,1.62,0,0,1,1.312-.405,1.021,1.021,0,0,1,1,.826c.275,1.377-2.349,4.277-3.71,5.006h-.146a.308.308,0,0,1-.162.049Zm2.106-5.119a7.355,7.355,0,0,0-1.62,4.115c1.345-1.021,3.013-3.24,2.851-4.05,0-.1,0-.324-.454-.324h-.146a1.085,1.085,0,0,0-.632.259Z" fill="#61a5c2"/>
          <path id="Trazado_65" data-name="Trazado 65" d="M250.484,633.922l13.559,1.442-1.328,15.082L249.156,649Z" opacity="0.2"/>
          <path id="Trazado_66" data-name="Trazado 66" d="M181.375,631.768h13.138l-.567,15.7H180.808Z" opacity="0.2"/>
          <path id="Trazado_67" data-name="Trazado 67" d="M186.786,364.856h69.66c6.626,36.207,27.378,164.3,12.49,278.429l-23.6-2.932s2.187-151.519-18.646-207.522c-2.4,29.97-5.249,61.868-7.711,78.845-6.01,41.764-18.986,133.083-18.986,133.083H175.964s4.86-87.383,7.177-128.45C185.62,471.728,186.705,374.009,186.786,364.856Z" fill="#61a5c2"/>
          <path id="Trazado_68" data-name="Trazado 68" d="M226.8,432.832A186.508,186.508,0,0,1,234.592,463c1.944-26.681-5.848-54.967-5.848-54.967Z" opacity="0.2"/>
          <path id="Trazado_69" data-name="Trazado 69" d="M271.706,648.778,242.5,644.436l.891-8.084,30.375,3.985Z" fill="#61a5c2"/>
          <path id="Trazado_70" data-name="Trazado 70" d="M271.706,648.778,242.5,644.436l.891-8.084,30.375,3.985Z" fill="#fff" opacity="0.6"/>
          <path id="Trazado_71" data-name="Trazado 71" d="M202.873,644.938H174.539v-8.473l29.4-.551Z" fill="#61a5c2"/>
          <path id="Trazado_72" data-name="Trazado 72" d="M202.873,644.938H174.539v-8.473l29.4-.551Z" fill="#fff" opacity="0.6"/>
          <path id="Trazado_73" data-name="Trazado 73" d="M186.656,376.974l-.065-10.093,71.053-4.39.5,9.785Z" fill="#263238"/>
          <rect id="Rectángulo_36" data-name="Rectángulo 36" width="3.208" height="14.791" transform="translate(201.431 364.322)" fill="#61a5c2"/>
          <rect id="Rectángulo_37" data-name="Rectángulo 37" width="3.208" height="14.791" transform="translate(250.542 359.641) rotate(-4.17)" fill="#61a5c2"/>
          <path id="Trazado_74" data-name="Trazado 74" d="M257.58,362.491l-70.988,5.249c0-6.221-.162-13.154-.632-20.477-.875-13.527-2.543-28.334-4.406-42.217-3.953-29.5-8.8-54.821-8.8-54.821,33.048-8.343,77.387-6.172,77.387-6.172C261.662,287.21,257.58,362.491,257.58,362.491Z" fill="#61a5c2"/>
          <path id="Trazado_75" data-name="Trazado 75" d="M257.58,362.491l-70.988,5.249c0-6.221-.162-13.154-.632-20.477-.875-13.527-2.543-28.334-4.406-42.217-3.953-29.5-8.8-54.821-8.8-54.821,33.048-8.343,77.387-6.172,77.387-6.172C261.662,287.21,257.58,362.491,257.58,362.491Z" fill="#fff" opacity="0.6"/>
          <path id="Trazado_76" data-name="Trazado 76" d="M197.98,245.8c6.48,5.816,22.081,3.677,22.081,3.677s9.72-2.689,7.727-5.751c-5.767-.94-8.554-3.629-9.72-7.079a16.329,16.329,0,0,1-.583-6.577,31.3,31.3,0,0,1,.486-3.677l-19.44-14.353C201.139,221.519,204.25,238.934,197.98,245.8Z" fill="#e4897b"/>
          <path id="Trazado_77" data-name="Trazado 77" d="M203.083,221.162c.761,11.632,10.319,14.839,15,15.487a16.33,16.33,0,0,1-.583-6.577Z" opacity="0.2"/>
          <path id="Trazado_78" data-name="Trazado 78" d="M236.52,184.4c4.714,4.471,2.754,18.1-6.853,25.061s-9.607-26.73-9.607-26.73S233.523,181.553,236.52,184.4Z" fill="#263238"/>
          <path id="Trazado_79" data-name="Trazado 79" d="M201.771,223.852a16.427,16.427,0,0,0,18.873,6.367,18.274,18.274,0,0,0,10.433-8.5,19.265,19.265,0,0,0,.875-1.733c4.73-11,6.188-30.44-5.459-37.665a17.82,17.82,0,0,0-24.543,5.605,18.031,18.031,0,0,0-2.673,7.841C197.851,208.656,196.393,216.205,201.771,223.852Z" fill="#e4897b"/>
          <path id="Trazado_80" data-name="Trazado 80" d="M218.133,202.646c-.243,1.021.227,1.976.923,2.09s1.377-.648,1.62-1.62-.243-1.976-.907-2.09S218.327,201.593,218.133,202.646Z" fill="#263238"/>
          <path id="Trazado_81" data-name="Trazado 81" d="M229.943,204.655c-.243,1.021.243,1.993.907,2.106s1.393-.648,1.62-1.62-.243-1.993-.923-2.106S230.121,203.666,229.943,204.655Z" fill="#263238"/>
          <path id="Trazado_82" data-name="Trazado 82" d="M226.1,204.525a37.471,37.471,0,0,0,3.467,9.72,6.107,6.107,0,0,1-5.184.081Z" fill="#de5753"/>
          <path id="Trazado_83" data-name="Trazado 83" d="M215.12,198.191a.713.713,0,0,0,.648-.13,4.973,4.973,0,0,1,4.277-1.393.616.616,0,0,0,.745-.454.632.632,0,0,0-.454-.745h0a6.221,6.221,0,0,0-5.427,1.62.632.632,0,0,0,0,.875h0a.793.793,0,0,0,.211.227Z" fill="#263238"/>
          <path id="Trazado_84" data-name="Trazado 84" d="M221.762,219.51h0a9.477,9.477,0,0,1-7.727-4.212.328.328,0,0,1,.551-.356h0a9.121,9.121,0,0,0,7.193,3.872.324.324,0,0,1,.324.308h0a.324.324,0,0,1-.308.308Z" fill="#263238"/>
          <path id="Trazado_85" data-name="Trazado 85" d="M235.71,201.447a.7.7,0,0,0,.356.1.648.648,0,0,0,.437-.761h0a6.124,6.124,0,0,0-3.823-4.2.616.616,0,0,0-.761.4h0a.632.632,0,0,0,.4.778h0a5.006,5.006,0,0,1,2.981,3.37.616.616,0,0,0,.405.308Z" fill="#263238"/>
          <path id="Trazado_86" data-name="Trazado 86" d="M211.426,181.343v5.767a4.277,4.277,0,0,0-2.786,5.087c1.247,5.022-2.365,12.118-6.4,14.58,0,0,.13-2.09-1.62-1.814s-2.641,11.146.146,16.7c0,0-4.6-5.281-6.124-16.978-1.426-10.822-.68-19.6,1.96-23.393Z" fill="#263238"/>
          <path id="Trazado_87" data-name="Trazado 87" d="M191.889,205.286a12.409,12.409,0,0,0,5.929,7.371c3.823,2.057,6.691-1.15,6.48-5.249-.259-3.661-2.527-9.234-6.772-9.558S190.787,201.415,191.889,205.286Z" fill="#e4897b"/>
          <path id="Trazado_88" data-name="Trazado 88" d="M193.995,191.16s-4-9.607,6.48-16.654,35.348,1.166,37.1,6.885S220.514,197.494,193.995,191.16Z" fill="#263238"/>
          <path id="Trazado_89" data-name="Trazado 89" d="M200.426,239.825l15.86,8.683,2.171-11.858,11.113,7.225v15.147l-11.761-7.015-8.262,12.377-16.313-17.917Z" fill="#61a5c2"/>
          <rect id="Rectángulo_38" data-name="Rectángulo 38" width="16.265" height="12.215" rx="1.879" transform="translate(222.086 363.699) rotate(-3.17)" fill="#fff"/>
          <path id="Trazado_90" data-name="Trazado 90" d="M200.426,239.825l15.86,8.683,2.171-11.858,11.113,7.225v15.147l-11.761-7.015-8.262,12.377-16.313-17.917Z" fill="#fff" opacity="0.5"/>
          <path id="Trazado_91" data-name="Trazado 91" d="M211.426,344.185c-4.714,7.1-19.8,7.047-25.466,3.127-.875-13.527-2.543-28.334-4.406-42.217Z" opacity="0.2"/>
          <path id="Trazado_92" data-name="Trazado 92" d="M186.592,289.559s3.353,21.838,6.642,26.1,71.28,41.44,71.28,41.44l23.506-1.7,10.805,12.393s-31.315,4.86-34.733,3.92a32.964,32.964,0,0,1-6.043-2.333s-71.28-28.075-77.274-34.49-12.814-39.35-12.814-39.35Z" fill="#e4897b"/>
          <path id="Trazado_93" data-name="Trazado 93" d="M172.757,250.274c12.442-2.592,18.873,49.037,18.873,49.037l-25.45,6.48S157.448,253.481,172.757,250.274Z" fill="#61a5c2"/>
          <path id="Trazado_94" data-name="Trazado 94" d="M172.757,250.274c12.442-2.592,18.873,49.037,18.873,49.037l-25.45,6.48S157.448,253.481,172.757,250.274Z" fill="#fff" opacity="0.5"/>
          <path id="Trazado_95" data-name="Trazado 95" d="M164.689,304.56l28.544-6.836v4.909l-27.265,7.906Z" fill="#61a5c2"/>
        </g>
      </g>
      <g id="freepik--Boxes--inject-11">
        <path id="Trazado_96" data-name="Trazado 96" d="M262.44,626.94V404.87a46.988,46.988,0,0,0-8.446-26.883l-7.754-11.105H384.1l7.76,11.113a46.98,46.98,0,0,1,8.44,26.876V624.834" fill="none" stroke="#263238" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9.72"/>
        <circle id="Elipse_2" data-name="Elipse 2" cx="14.272" cy="14.272" r="14.272" transform="translate(541.145 647.077)" fill="#263238"/>
        <path id="Trazado_97" data-name="Trazado 97" d="M562.561,661.349a7.128,7.128,0,1,0-2.093,5.046A7.144,7.144,0,0,0,562.561,661.349Z" fill="#fff" opacity="0.4"/>
        <path id="Trazado_98" data-name="Trazado 98" d="M553.7,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1a5.427,5.427,0,0,1-5.427,5.427Z" fill="#263238"/>
        <path id="Trazado_99" data-name="Trazado 99" d="M553.7,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1a5.427,5.427,0,0,1-5.427,5.427Z" fill="#fff" opacity="0.2"/>
        <circle id="Elipse_3" data-name="Elipse 3" cx="14.272" cy="14.272" r="14.272" transform="translate(382.385 647.077)" fill="#263238"/>
        <path id="Trazado_100" data-name="Trazado 100" d="M403.8,661.349a7.128,7.128,0,1,0-2.093,5.046A7.144,7.144,0,0,0,403.8,661.349Z" fill="#fff" opacity="0.4"/>
        <path id="Trazado_101" data-name="Trazado 101" d="M394.94,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1a5.427,5.427,0,0,1-5.427,5.427Z" fill="#263238"/>
        <path id="Trazado_102" data-name="Trazado 102" d="M394.94,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1a5.427,5.427,0,0,1-5.427,5.427Z" fill="#fff" opacity="0.2"/>
        <path id="Trazado_103" data-name="Trazado 103" d="M579.96,621.319V634.8a4.552,4.552,0,0,1-4.552,4.552H256.381a4.552,4.552,0,0,1-4.552-4.552V621.319Z" fill="#263238"/>
        <path id="Trazado_104" data-name="Trazado 104" d="M579.96,621.319V634.8a4.552,4.552,0,0,1-4.552,4.552H256.381a4.552,4.552,0,0,1-4.552-4.552V621.319Z" fill="#fff" opacity="0.4"/>
        <path id="Trazado_105" data-name="Trazado 105" d="M466.56,621.319V634.8a4.552,4.552,0,0,1-4.552,4.552H256.381a4.552,4.552,0,0,1-4.552-4.552V621.319Z" fill="#fff" opacity="0.2"/>
        <circle id="Elipse_4" data-name="Elipse 4" cx="14.272" cy="14.272" r="14.272" transform="translate(426.125 647.077)" fill="#263238"/>
        <path id="Trazado_106" data-name="Trazado 106" d="M447.541,661.349a7.128,7.128,0,1,0-2.093,5.046A7.144,7.144,0,0,0,447.541,661.349Z" fill="#fff" opacity="0.6"/>
        <path id="Trazado_107" data-name="Trazado 107" d="M438.68,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1A5.427,5.427,0,0,1,438.68,664.524Z" fill="#263238"/>
        <path id="Trazado_108" data-name="Trazado 108" d="M438.68,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1A5.427,5.427,0,0,1,438.68,664.524Z" fill="#fff" opacity="0.4"/>
        <circle id="Elipse_5" data-name="Elipse 5" cx="14.272" cy="14.272" r="14.272" transform="translate(267.365 647.077)" fill="#263238"/>
        <path id="Trazado_109" data-name="Trazado 109" d="M288.781,661.349a7.128,7.128,0,1,0-2.094,5.046,7.144,7.144,0,0,0,2.094-5.046Z" fill="#fff" opacity="0.6"/>
        <path id="Trazado_110" data-name="Trazado 110" d="M279.92,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1A5.427,5.427,0,0,1,279.92,664.524Z" fill="#263238"/>
        <path id="Trazado_111" data-name="Trazado 111" d="M279.92,664.524h0a5.443,5.443,0,0,1-5.1-3.564l-8.408-23.036h18.938V659.1A5.427,5.427,0,0,1,279.92,664.524Z" fill="#fff" opacity="0.4"/>
        <rect id="Rectángulo_39" data-name="Rectángulo 39" width="151.065" height="104.571" transform="translate(291.341 516.748)" fill="#61a5c2"/>
        <rect id="Rectángulo_40" data-name="Rectángulo 40" width="151.065" height="104.571" transform="translate(291.341 516.748)" fill="#fff" opacity="0.4"/>
        <rect id="Rectángulo_41" data-name="Rectángulo 41" width="70.097" height="104.571" transform="translate(291.341 516.748)" fill="#fff" opacity="0.2"/>
        <rect id="Rectángulo_42" data-name="Rectángulo 42" width="11.745" height="14.953" rx="1.49" transform="translate(344.558 599.206)" opacity="0.2"/>
        <rect id="Rectángulo_43" data-name="Rectángulo 43" width="11.745" height="14.953" rx="1.49" transform="translate(328.747 599.206)" opacity="0.2"/>
        <rect id="Rectángulo_44" data-name="Rectángulo 44" width="8.537" height="10.903" transform="translate(401.387 516.748)" opacity="0.4"/>
        <rect id="Rectángulo_45" data-name="Rectángulo 45" width="58.806" height="13.673" transform="translate(374.463 561.395)" opacity="0.2"/>
        <rect id="Rectángulo_46" data-name="Rectángulo 46" width="20.104" height="20.104" transform="translate(295.909 522.191)" opacity="0.2"/>
        <rect id="Rectángulo_47" data-name="Rectángulo 47" width="151.065" height="104.571" transform="translate(306.763 412.177)" fill="#61a5c2"/>
        <rect id="Rectángulo_48" data-name="Rectángulo 48" width="151.065" height="104.571" transform="translate(306.763 412.177)" opacity="0.4"/>
        <rect id="Rectángulo_49" data-name="Rectángulo 49" width="70.097" height="104.571" transform="translate(306.763 412.177)" fill="#fff" opacity="0.2"/>
        <rect id="Rectángulo_50" data-name="Rectángulo 50" width="11.745" height="14.953" rx="1.49" transform="translate(359.996 494.635)" opacity="0.2"/>
        <rect id="Rectángulo_51" data-name="Rectángulo 51" width="11.745" height="14.953" rx="1.49" transform="translate(344.185 494.635)" opacity="0.2"/>
        <rect id="Rectángulo_52" data-name="Rectángulo 52" width="8.537" height="10.903" transform="translate(416.81 412.177)" opacity="0.4"/>
        <rect id="Rectángulo_53" data-name="Rectángulo 53" width="58.806" height="13.673" transform="translate(389.885 456.824)" opacity="0.2"/>
        <rect id="Rectángulo_54" data-name="Rectángulo 54" width="20.104" height="20.104" transform="translate(311.348 417.62)" opacity="0.2"/>
        <rect id="Rectángulo_55" data-name="Rectángulo 55" width="151.065" height="104.571" transform="translate(399.233 412.177)" fill="#61a5c2"/>
        <rect id="Rectángulo_56" data-name="Rectángulo 56" width="151.065" height="104.571" transform="translate(399.233 412.177)" fill="#fff" opacity="0.4"/>
        <rect id="Rectángulo_57" data-name="Rectángulo 57" width="70.097" height="104.571" transform="translate(399.233 412.177)" fill="#fff" opacity="0.2"/>
        <rect id="Rectángulo_58" data-name="Rectángulo 58" width="11.745" height="14.953" rx="1.49" transform="translate(452.466 494.635)" opacity="0.2"/>
        <rect id="Rectángulo_59" data-name="Rectángulo 59" width="11.745" height="14.953" rx="1.49" transform="translate(436.655 494.635)" opacity="0.2"/>
        <rect id="Rectángulo_60" data-name="Rectángulo 60" width="8.537" height="10.903" transform="translate(509.279 412.177)" opacity="0.4"/>
        <rect id="Rectángulo_61" data-name="Rectángulo 61" width="58.806" height="13.673" transform="translate(482.355 456.824)" opacity="0.2"/>
        <rect id="Rectángulo_62" data-name="Rectángulo 62" width="20.104" height="20.104" transform="translate(403.817 417.62)" opacity="0.2"/>
        <rect ref={ firstBox } id="Rectángulo_63" data-name="Rectángulo 63" width="151.065" height="104.571" transform="translate(346.988 307.606)" fill="#61a5c2"/>
        <rect id="Rectángulo_64" data-name="Rectángulo 64" width="70.097" height="104.571" transform="translate(346.988 307.606)" fill="#fff" opacity="0.2"/>
        <rect id="Rectángulo_65" data-name="Rectángulo 65" width="11.745" height="14.953" rx="1.49" transform="translate(400.205 390.064)" opacity="0.2"/>
        <rect id="Rectángulo_66" data-name="Rectángulo 66" width="11.745" height="14.953" rx="1.49" transform="translate(384.41 390.064)" opacity="0.2"/>
        <rect id="Rectángulo_67" data-name="Rectángulo 67" width="8.537" height="10.903" transform="translate(457.034 307.606)" opacity="0.4"/>
        <rect id="Rectángulo_68" data-name="Rectángulo 68" width="58.806" height="13.673" transform="translate(430.11 352.253)" opacity="0.2"/>
        <rect id="Rectángulo_69" data-name="Rectángulo 69" width="20.104" height="20.104" transform="translate(351.556 313.049)" opacity="0.2"/>
        <rect id="Rectángulo_70" data-name="Rectángulo 70" width="151.065" height="104.571" transform="translate(387.472 516.748)" fill="#263238"/>
        <rect id="Rectángulo_71" data-name="Rectángulo 71" width="151.065" height="104.571" transform="translate(387.472 516.748)" fill="#fff" opacity="0.2"/>
        <rect id="Rectángulo_72" data-name="Rectángulo 72" width="70.097" height="104.571" transform="translate(387.472 516.748)" fill="#fff" opacity="0.2"/>
        <rect id="Rectángulo_73" data-name="Rectángulo 73" width="11.745" height="14.953" rx="1.49" transform="translate(440.689 599.206)" opacity="0.2"/>
        <rect id="Rectángulo_74" data-name="Rectángulo 74" width="11.745" height="14.953" rx="1.49" transform="translate(424.877 599.206)" opacity="0.2"/>
        <rect id="Rectángulo_75" data-name="Rectángulo 75" width="8.537" height="10.903" transform="translate(497.518 516.748)" opacity="0.4"/>
        <rect id="Rectángulo_76" data-name="Rectángulo 76" width="58.806" height="13.673" transform="translate(470.594 561.395)" opacity="0.2"/>
        <rect id="Rectángulo_77" data-name="Rectángulo 77" width="20.104" height="20.104" transform="translate(392.04 522.191)" opacity="0.2"/>
      </g>
    </g>
  </g>
</svg>

  )
}

export default IconPerson