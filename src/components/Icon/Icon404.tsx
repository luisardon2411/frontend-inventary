import { useEffect, useRef } from "react";
import gsap from "gsap";

const Icon404 = () => {
    const balloonRef = useRef<SVGPathElement>(null);
    useEffect( () => {
        const balloonElement = balloonRef.current;
        if (balloonElement) {
            gsap.set(balloonElement, { opacity: 0, y: -100, scale: 0 });
      
            const balloonTimeline = gsap.timeline({ repeat: -1 });
      
            // Animación de entrada
            balloonTimeline.to(balloonElement, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: 'elastic.out(1, 0.5)',
            });
      
            // Animación de rebote
            balloonTimeline.to(balloonElement, {
              y: -20,
              repeat: -1,
              yoyo: true,
              duration: 1,
              ease: 'power1.inOut',
            });
      
            // Iniciar la animación
            balloonTimeline.play();
          }
        }, []);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="890" height="840" viewBox="0 0 890 840">
            <defs>
                <clipPath id="clip-path">
                    <rect id="Rectángulo_87" data-name="Rectángulo 87" width="890" height="840" transform="translate(150 120)" fill="#fff" stroke="#707070" strokeWidth="1" />
                </clipPath>
            </defs>
            <g id="_404" data-name="404" transform="translate(-150 -120)" clipPath="url(#clip-path)">
                <g id="_404_error_with_a_tired_person-rafiki" data-name="404 error with a tired person-rafiki" transform="translate(150 110.522)">
                    <g id="freepik--background-complete--inject-19">
                        <rect id="Rectángulo_88" data-name="Rectángulo 88" width="890" height="0.445" transform="translate(0 680.672)" fill="#ebebeb" />
                        <rect id="Rectángulo_89" data-name="Rectángulo 89" width="58.954" height="0.445" transform="translate(741.868 709.312)" fill="#ebebeb" />
                        <rect id="Rectángulo_90" data-name="Rectángulo 90" width="15.468" height="0.445" transform="translate(574.103 714.154)" fill="#ebebeb" />
                        <rect id="Rectángulo_91" data-name="Rectángulo 91" width="34.158" height="0.445" transform="translate(705.93 692.794)" fill="#ebebeb" />
                        <rect id="Rectángulo_92" data-name="Rectángulo 92" width="76.878" height="0.445" transform="translate(93.379 695.784)" fill="#ebebeb" />
                        <rect id="Rectángulo_93" data-name="Rectángulo 93" width="11.267" height="0.445" transform="translate(186.117 695.784)" fill="#ebebeb" />
                        <rect id="Rectángulo_94" data-name="Rectángulo 94" width="166.75" height="0.445" transform="translate(234.017 703.296)" fill="#ebebeb" />
                        <path id="Trazado_205" data-name="Trazado 205" d="M421.86,601.284H78.16A10.164,10.164,0,0,1,68.014,591.12V107.975A10.164,10.164,0,0,1,78.16,97.9h343.7a10.164,10.164,0,0,1,10.164,10.164V591.12A10.164,10.164,0,0,1,421.86,601.284ZM78.16,98.256a9.719,9.719,0,0,0-9.7,9.719V591.12a9.719,9.719,0,0,0,9.7,9.719h343.7a9.737,9.737,0,0,0,9.719-9.719V107.975a9.737,9.737,0,0,0-9.719-9.719Z" fill="#ebebeb" />
                        <path id="Trazado_206" data-name="Trazado 206" d="M806.892,601.284H463.174A10.182,10.182,0,0,1,453.01,591.12V107.975A10.182,10.182,0,0,1,463.174,97.9H806.892a10.164,10.164,0,0,1,10.128,10.075V591.12A10.164,10.164,0,0,1,806.892,601.284ZM463.174,98.256a9.737,9.737,0,0,0-9.719,9.719V591.12a9.737,9.737,0,0,0,9.719,9.719H806.892a9.737,9.737,0,0,0,9.719-9.719V107.975a9.737,9.737,0,0,0-9.719-9.719Z" fill="#ebebeb" />
                        <path id="Trazado_207" data-name="Trazado 207" d="M690.907,679.568h72.108l-14.56-260.717H705.485Z" fill="#f0f0f0" />
                        <rect id="Rectángulo_95" data-name="Rectángulo 95" width="49.003" height="13.457" transform="translate(702.459 412.533)" fill="#ebebeb" />
                        <path id="Trazado_208" data-name="Trazado 208" d="M603.473,679.568h72.108l-14.56-260.717H618.052Z" fill="#f0f0f0" />
                        <rect id="Rectángulo_96" data-name="Rectángulo 96" width="49.003" height="13.457" transform="translate(615.026 412.533)" fill="#ebebeb" />
                        <rect id="Rectángulo_97" data-name="Rectángulo 97" width="78.391" height="41.011" transform="translate(621.006 638.557)" fill="#e6e6e6" />
                        <rect id="Rectángulo_98" data-name="Rectángulo 98" width="78.391" height="41.011" transform="translate(535.424 638.557)" fill="#e0e0e0" />
                        <rect id="Rectángulo_99" data-name="Rectángulo 99" width="78.391" height="41.011" transform="translate(709.134 638.557)" fill="#e6e6e6" />
                        <path id="Trazado_209" data-name="Trazado 209" d="M321.842,560.291V541.939l-45.337,18.352V541.939l-45.319,18.352V541.939L185.85,560.291V541.939l-54.7,22.143H130.6V435.94H102.457V679.568H367.178V541.939Z" fill="#f0f0f0" />
                        <rect id="Rectángulo_100" data-name="Rectángulo 100" width="137.63" height="66.198" transform="translate(267.214 613.388)" fill="#e6e6e6" />
                        <path id="Trazado_210" data-name="Trazado 210" d="M247.634,612.035h-22.8a5.981,5.981,0,0,0-5.892,6.07v46.28a6.052,6.052,0,0,0,4.486,5.892v9.238H227.2v-8.989h7.12v9.042h3.774v-9.042h7.12v9.042h3.774V670.33a6.034,6.034,0,0,0,4.468-5.892v-46.28a5.981,5.981,0,0,0-5.821-6.123Z" fill="#e6e6e6" />
                        <path id="Trazado_211" data-name="Trazado 211" d="M205.554,612.035h-22.8a5.981,5.981,0,0,0-5.892,6.07v46.28a6.016,6.016,0,0,0,4.486,5.892v9.238h3.774v-8.989h7.12v9.042H196v-9.042h7.12v9.042h3.756V670.33a6.052,6.052,0,0,0,4.486-5.892v-46.28A5.981,5.981,0,0,0,205.554,612.035Z" fill="#e6e6e6" />
                        <path id="Trazado_212" data-name="Trazado 212" d="M163.457,612.035H140.62a5.981,5.981,0,0,0-5.892,6.07v46.28a6.052,6.052,0,0,0,4.486,5.892v9.238h3.756v-8.989h7.12v9.042h3.756v-9.042h7.12v9.042h3.756V670.33a6.016,6.016,0,0,0,4.486-5.892v-46.28a5.981,5.981,0,0,0-5.749-6.123Z" fill="#e6e6e6" />
                        <path id="Trazado_213" data-name="Trazado 213" d="M137.256,373.284c-.338-6.782,14.009-9.594,16.732-3.952s-2.688,9.808-2.688,9.808,8.188,3.382,1.371,8.544-9.576,0-9.576,0-7.85,7.3-9.9,4.468,2.083-4.948,2.083-4.948-6.6.427-5.7-6.266S137.256,373.284,137.256,373.284Z" fill="#e0e0e0" />
                        <path id="Trazado_214" data-name="Trazado 214" d="M116.483,404.843c-.178-3.382,7.013-4.788,8.366-1.976A4.2,4.2,0,0,1,123.5,407.8s4.094,1.78.676,4.272-4.788,0-4.788,0-3.916,3.649-4.948,2.243,1.032-2.51,1.032-2.51a2.581,2.581,0,0,1-2.848-3.133A4.628,4.628,0,0,1,116.483,404.843Z" fill="#e0e0e0" />
                        <path id="Trazado_215" data-name="Trazado 215" d="M113.706,334.3c-.5-9.719,20.1-13.777,24.03-5.678s-3.934,14.151-3.934,14.151,11.784,4.842,1.976,12.282-13.742,0-13.742,0-11.267,10.449-14.24,6.408,2.955-7.12,2.955-7.12-9.487.623-8.188-8.9S113.706,334.3,113.706,334.3Z" fill="#e0e0e0" />
                        <path id="Trazado_216" data-name="Trazado 216" d="M647.92,354.024c-.338-6.782,14.009-9.594,16.732-3.952s-2.723,9.861-2.723,9.861,8.188,3.382,1.371,8.544-9.576,0-9.576,0-7.85,7.3-9.9,4.468,2.047-5,2.047-5-6.6.427-5.7-6.266S647.92,354.024,647.92,354.024Z" fill="#e0e0e0" />
                        <path id="Trazado_217" data-name="Trazado 217" d="M627.112,385.584c-.178-3.382,7-4.788,8.366-1.976a4.2,4.2,0,0,1-1.371,4.931s4.112,1.691.694,4.272-4.788,0-4.788,0-3.916,3.56-4.948,2.243,1.032-2.51,1.032-2.51a2.581,2.581,0,0,1-2.848-3.133A4.628,4.628,0,0,1,627.112,385.584Z" fill="#e0e0e0" />
                        <path id="Trazado_218" data-name="Trazado 218" d="M624.335,315.06c-.5-9.737,20.1-13.777,24.03-5.678s-3.934,14.151-3.934,14.151,11.784,4.842,1.976,12.282-13.742,0-13.742,0-11.267,10.449-14.24,6.408,2.955-7.12,2.955-7.12-9.487.623-8.188-8.9S624.335,315.06,624.335,315.06Z" fill="#e0e0e0" />
                        <path id="Trazado_219" data-name="Trazado 219" d="M743.079,359.329c-.338-6.782,14.009-9.594,16.75-3.969s-2.741,9.861-2.741,9.861,8.206,3.382,1.371,8.562-9.576,0-9.576,0-7.85,7.28-9.9,4.468,2.047-5,2.047-5-6.6.427-5.7-6.266S743.079,359.329,743.079,359.329Z" fill="#e0e0e0" />
                        <path id="Trazado_220" data-name="Trazado 220" d="M722.306,390.888c-.16-3.382,7.013-4.806,8.384-1.976a4.219,4.219,0,0,1-1.371,4.931s4.094,1.78.676,4.272-4.788,0-4.788,0-3.916,3.649-4.948,2.243,1.032-2.51,1.032-2.51a2.581,2.581,0,0,1-2.848-3.133,4.628,4.628,0,0,1,3.863-3.827Z" fill="#e0e0e0" />
                        <path id="Trazado_221" data-name="Trazado 221" d="M719.529,320.4c-.481-9.737,20.114-13.777,24.03-5.7s-3.916,14.151-3.916,14.151,11.766,4.859,1.958,12.282-13.742,0-13.742,0-11.267,10.466-14.24,6.426,2.937-7.12,2.937-7.12-9.487.623-8.17-8.989S719.529,320.4,719.529,320.4Z" fill="#e0e0e0" />
                        <path id="Trazado_222" data-name="Trazado 222" d="M605.022,589.607V546.745H594.111V397.723H578.34V378.481L544.662,362.3V342.917H540v54.806h-6.533V546.745h-6.515V468.389H509.222V428h-4.948V546.745H490.817V501.551h-8.864V490.016H461.429V450.607H450.18V422.714H436.367v-40.62h-4.931v40.62H417.624v27.893H406.392v39.409H385.868v11.534H377v45.194h-10.52V490.016H345.961V367.908h-6.533V354.451H295.587v13.457H286.26v88.466H248.933v8.651H234.942v6.728h13.991v34.621H226.22v.214H190.211v172.98H612.48V589.607Z" fill="#e6e6e6" />
                        <rect id="Rectángulo_101" data-name="Rectángulo 101" width="5.287" height="5.447" transform="translate(198.31 515.132)" fill="#f0f0f0" />
                        <rect id="Rectángulo_102" data-name="Rectángulo 102" width="5.287" height="5.447" transform="translate(198.31 524.263)" fill="#f0f0f0" />
                        <rect id="Rectángulo_103" data-name="Rectángulo 103" width="5.287" height="5.447" transform="translate(292.828 372.661)" fill="#f0f0f0" />
                        <rect id="Rectángulo_104" data-name="Rectángulo 104" width="5.287" height="5.447" transform="translate(292.828 381.792)" fill="#f0f0f0" />
                        <rect id="Rectángulo_105" data-name="Rectángulo 105" width="5.287" height="5.447" transform="translate(292.828 390.924)" fill="#f0f0f0" />
                        <rect id="Rectángulo_106" data-name="Rectángulo 106" width="5.287" height="5.447" transform="translate(292.828 400.073)" fill="#f0f0f0" />
                        <rect id="Rectángulo_107" data-name="Rectángulo 107" width="5.287" height="5.447" transform="translate(292.828 409.204)" fill="#f0f0f0" />
                        <rect id="Rectángulo_108" data-name="Rectángulo 108" width="5.287" height="5.447" transform="translate(292.828 418.336)" fill="#f0f0f0" />
                        <rect id="Rectángulo_109" data-name="Rectángulo 109" width="5.287" height="5.447" transform="translate(292.828 427.467)" fill="#f0f0f0" />
                        <rect id="Rectángulo_110" data-name="Rectángulo 110" width="5.287" height="5.447" transform="translate(292.828 436.598)" fill="#f0f0f0" />
                        <rect id="Rectángulo_111" data-name="Rectángulo 111" width="5.287" height="5.447" transform="translate(292.828 464.01)" fill="#f0f0f0" />
                        <rect id="Rectángulo_112" data-name="Rectángulo 112" width="5.287" height="5.447" transform="translate(292.828 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_113" data-name="Rectángulo 113" width="5.287" height="5.447" transform="translate(301.229 372.661)" fill="#f0f0f0" />
                        <rect id="Rectángulo_114" data-name="Rectángulo 114" width="5.287" height="5.447" transform="translate(301.229 381.792)" fill="#f0f0f0" />
                        <rect id="Rectángulo_115" data-name="Rectángulo 115" width="5.287" height="5.447" transform="translate(301.229 390.924)" fill="#f0f0f0" />
                        <rect id="Rectángulo_116" data-name="Rectángulo 116" width="5.287" height="5.447" transform="translate(301.229 400.073)" fill="#f0f0f0" />
                        <rect id="Rectángulo_117" data-name="Rectángulo 117" width="5.287" height="5.447" transform="translate(301.229 409.204)" fill="#f0f0f0" />
                        <rect id="Rectángulo_118" data-name="Rectángulo 118" width="5.287" height="5.447" transform="translate(301.229 418.336)" fill="#f0f0f0" />
                        <rect id="Rectángulo_119" data-name="Rectángulo 119" width="5.287" height="5.447" transform="translate(301.229 427.467)" fill="#f0f0f0" />
                        <rect id="Rectángulo_120" data-name="Rectángulo 120" width="5.287" height="5.447" transform="translate(301.229 436.598)" fill="#f0f0f0" />
                        <rect id="Rectángulo_121" data-name="Rectángulo 121" width="5.287" height="5.447" transform="translate(301.229 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_122" data-name="Rectángulo 122" width="5.287" height="5.447" transform="translate(309.631 372.661)" fill="#f0f0f0" />
                        <rect id="Rectángulo_123" data-name="Rectángulo 123" width="5.287" height="5.447" transform="translate(309.631 381.792)" fill="#f0f0f0" />
                        <rect id="Rectángulo_124" data-name="Rectángulo 124" width="5.287" height="5.447" transform="translate(309.631 390.924)" fill="#f0f0f0" />
                        <rect id="Rectángulo_125" data-name="Rectángulo 125" width="5.287" height="5.447" transform="translate(309.631 400.073)" fill="#f0f0f0" />
                        <rect id="Rectángulo_126" data-name="Rectángulo 126" width="5.287" height="5.447" transform="translate(309.631 409.204)" fill="#f0f0f0" />
                        <rect id="Rectángulo_127" data-name="Rectángulo 127" width="5.287" height="5.447" transform="translate(309.631 418.336)" fill="#f0f0f0" />
                        <rect id="Rectángulo_128" data-name="Rectángulo 128" width="5.287" height="5.447" transform="translate(309.631 427.467)" fill="#f0f0f0" />
                        <rect id="Rectángulo_129" data-name="Rectángulo 129" width="5.287" height="5.447" transform="translate(309.631 436.598)" fill="#f0f0f0" />
                        <rect id="Rectángulo_130" data-name="Rectángulo 130" width="5.287" height="5.447" transform="translate(318.033 372.661)" fill="#f0f0f0" />
                        <rect id="Rectángulo_131" data-name="Rectángulo 131" width="5.287" height="5.447" transform="translate(318.033 381.792)" fill="#f0f0f0" />
                        <rect id="Rectángulo_132" data-name="Rectángulo 132" width="5.287" height="5.447" transform="translate(318.033 390.924)" fill="#f0f0f0" />
                        <rect id="Rectángulo_133" data-name="Rectángulo 133" width="5.287" height="5.447" transform="translate(318.033 400.073)" fill="#f0f0f0" />
                        <rect id="Rectángulo_134" data-name="Rectángulo 134" width="5.287" height="5.447" transform="translate(318.033 409.204)" fill="#f0f0f0" />
                        <rect id="Rectángulo_135" data-name="Rectángulo 135" width="5.287" height="5.447" transform="translate(318.033 418.336)" fill="#f0f0f0" />
                        <rect id="Rectángulo_136" data-name="Rectángulo 136" width="5.287" height="5.447" transform="translate(318.033 436.598)" fill="#f0f0f0" />
                        <rect id="Rectángulo_137" data-name="Rectángulo 137" width="5.287" height="5.447" transform="translate(318.033 445.73)" fill="#f0f0f0" />
                        <rect id="Rectángulo_138" data-name="Rectángulo 138" width="5.287" height="5.447" transform="translate(318.033 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_139" data-name="Rectángulo 139" width="5.287" height="5.447" transform="translate(318.033 482.273)" fill="#f0f0f0" />
                        <rect id="Rectángulo_140" data-name="Rectángulo 140" width="5.287" height="5.447" transform="translate(318.033 491.405)" fill="#f0f0f0" />
                        <rect id="Rectángulo_141" data-name="Rectángulo 141" width="5.287" height="5.447" transform="translate(318.033 500.536)" fill="#f0f0f0" />
                        <rect id="Rectángulo_142" data-name="Rectángulo 142" width="5.287" height="5.447" transform="translate(318.033 509.667)" fill="#f0f0f0" />
                        <rect id="Rectángulo_143" data-name="Rectángulo 143" width="5.287" height="5.447" transform="translate(318.033 518.817)" fill="#f0f0f0" />
                        <rect id="Rectángulo_144" data-name="Rectángulo 144" width="5.287" height="5.447" transform="translate(318.033 527.948)" fill="#f0f0f0" />
                        <rect id="Rectángulo_145" data-name="Rectángulo 145" width="5.287" height="5.447" transform="translate(326.416 372.661)" fill="#f0f0f0" />
                        <rect id="Rectángulo_146" data-name="Rectángulo 146" width="5.287" height="5.447" transform="translate(326.416 381.792)" fill="#f0f0f0" />
                        <rect id="Rectángulo_147" data-name="Rectángulo 147" width="5.287" height="5.447" transform="translate(326.416 390.924)" fill="#f0f0f0" />
                        <rect id="Rectángulo_148" data-name="Rectángulo 148" width="5.287" height="5.447" transform="translate(326.416 400.073)" fill="#f0f0f0" />
                        <rect id="Rectángulo_149" data-name="Rectángulo 149" width="5.287" height="5.447" transform="translate(326.416 409.204)" fill="#f0f0f0" />
                        <rect id="Rectángulo_150" data-name="Rectángulo 150" width="5.287" height="5.447" transform="translate(326.416 418.336)" fill="#f0f0f0" />
                        <rect id="Rectángulo_151" data-name="Rectángulo 151" width="5.287" height="5.447" transform="translate(326.416 445.73)" fill="#f0f0f0" />
                        <rect id="Rectángulo_152" data-name="Rectángulo 152" width="5.287" height="5.447" transform="translate(326.416 454.879)" fill="#f0f0f0" />
                        <rect id="Rectángulo_153" data-name="Rectángulo 153" width="5.287" height="5.447" transform="translate(326.416 464.01)" fill="#f0f0f0" />
                        <rect id="Rectángulo_154" data-name="Rectángulo 154" width="5.287" height="5.447" transform="translate(326.416 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_155" data-name="Rectángulo 155" width="5.287" height="5.447" transform="translate(326.416 482.273)" fill="#f0f0f0" />
                        <rect id="Rectángulo_156" data-name="Rectángulo 156" width="5.287" height="5.447" transform="translate(326.416 491.405)" fill="#f0f0f0" />
                        <rect id="Rectángulo_157" data-name="Rectángulo 157" width="5.287" height="5.447" transform="translate(326.416 500.536)" fill="#f0f0f0" />
                        <rect id="Rectángulo_158" data-name="Rectángulo 158" width="5.287" height="5.447" transform="translate(326.416 509.667)" fill="#f0f0f0" />
                        <rect id="Rectángulo_159" data-name="Rectángulo 159" width="5.287" height="5.447" transform="translate(326.416 518.817)" fill="#f0f0f0" />
                        <rect id="Rectángulo_160" data-name="Rectángulo 160" width="5.287" height="5.447" transform="translate(326.416 527.948)" fill="#f0f0f0" />
                        <rect id="Rectángulo_161" data-name="Rectángulo 161" width="5.287" height="5.447" transform="translate(326.416 537.079)" fill="#f0f0f0" />
                        <rect id="Rectángulo_162" data-name="Rectángulo 162" width="5.287" height="5.447" transform="translate(326.416 555.342)" fill="#f0f0f0" />
                        <rect id="Rectángulo_163" data-name="Rectángulo 163" width="5.287" height="5.447" transform="translate(334.818 372.661)" fill="#f0f0f0" />
                        <rect id="Rectángulo_164" data-name="Rectángulo 164" width="5.287" height="5.447" transform="translate(334.818 381.792)" fill="#f0f0f0" />
                        <rect id="Rectángulo_165" data-name="Rectángulo 165" width="5.287" height="5.447" transform="translate(334.818 390.924)" fill="#f0f0f0" />
                        <rect id="Rectángulo_166" data-name="Rectángulo 166" width="5.287" height="5.447" transform="translate(334.818 400.073)" fill="#f0f0f0" />
                        <rect id="Rectángulo_167" data-name="Rectángulo 167" width="5.287" height="5.447" transform="translate(334.818 409.204)" fill="#f0f0f0" />
                        <rect id="Rectángulo_168" data-name="Rectángulo 168" width="5.287" height="5.447" transform="translate(334.818 418.336)" fill="#f0f0f0" />
                        <rect id="Rectángulo_169" data-name="Rectángulo 169" width="5.287" height="5.447" transform="translate(334.818 445.73)" fill="#f0f0f0" />
                        <rect id="Rectángulo_170" data-name="Rectángulo 170" width="5.287" height="5.447" transform="translate(334.818 454.879)" fill="#f0f0f0" />
                        <rect id="Rectángulo_171" data-name="Rectángulo 171" width="5.287" height="5.447" transform="translate(334.818 464.01)" fill="#f0f0f0" />
                        <rect id="Rectángulo_172" data-name="Rectángulo 172" width="5.287" height="5.447" transform="translate(334.818 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_173" data-name="Rectángulo 173" width="5.287" height="5.447" transform="translate(334.818 500.536)" fill="#f0f0f0" />
                        <rect id="Rectángulo_174" data-name="Rectángulo 174" width="5.287" height="5.447" transform="translate(334.818 509.667)" fill="#f0f0f0" />
                        <rect id="Rectángulo_175" data-name="Rectángulo 175" width="5.287" height="5.447" transform="translate(334.818 518.817)" fill="#f0f0f0" />
                        <rect id="Rectángulo_176" data-name="Rectángulo 176" width="5.287" height="5.447" transform="translate(334.818 527.948)" fill="#f0f0f0" />
                        <rect id="Rectángulo_177" data-name="Rectángulo 177" width="5.287" height="5.447" transform="translate(334.818 537.079)" fill="#f0f0f0" />
                        <rect id="Rectángulo_178" data-name="Rectángulo 178" width="5.287" height="5.447" transform="translate(334.818 555.342)" fill="#f0f0f0" />
                        <rect id="Rectángulo_179" data-name="Rectángulo 179" width="5.287" height="5.447" transform="translate(334.818 564.474)" fill="#f0f0f0" />
                        <rect id="Rectángulo_180" data-name="Rectángulo 180" width="5.287" height="5.447" transform="translate(411.002 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_181" data-name="Rectángulo 181" width="5.287" height="5.447" transform="translate(411.002 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_182" data-name="Rectángulo 182" width="5.287" height="5.447" transform="translate(411.002 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_183" data-name="Rectángulo 183" width="5.287" height="5.447" transform="translate(411.002 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_184" data-name="Rectángulo 184" width="5.287" height="5.447" transform="translate(411.002 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_185" data-name="Rectángulo 185" width="5.287" height="5.447" transform="translate(411.002 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_186" data-name="Rectángulo 186" width="5.287" height="5.447" transform="translate(411.002 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_187" data-name="Rectángulo 187" width="5.287" height="5.447" transform="translate(411.002 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_188" data-name="Rectángulo 188" width="5.287" height="5.447" transform="translate(411.002 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_189" data-name="Rectángulo 189" width="5.287" height="5.447" transform="translate(411.002 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_190" data-name="Rectángulo 190" width="5.287" height="5.447" transform="translate(419.404 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_191" data-name="Rectángulo 191" width="5.287" height="5.447" transform="translate(419.404 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_192" data-name="Rectángulo 192" width="5.287" height="5.447" transform="translate(419.404 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_193" data-name="Rectángulo 193" width="5.287" height="5.447" transform="translate(419.404 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_194" data-name="Rectángulo 194" width="5.287" height="5.447" transform="translate(419.404 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_195" data-name="Rectángulo 195" width="5.287" height="5.447" transform="translate(419.404 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_196" data-name="Rectángulo 196" width="5.287" height="5.447" transform="translate(419.404 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_197" data-name="Rectángulo 197" width="5.287" height="5.447" transform="translate(427.787 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_198" data-name="Rectángulo 198" width="5.287" height="5.447" transform="translate(427.787 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_199" data-name="Rectángulo 199" width="5.287" height="5.447" transform="translate(427.787 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_200" data-name="Rectángulo 200" width="5.287" height="5.447" transform="translate(427.787 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_201" data-name="Rectángulo 201" width="5.287" height="5.447" transform="translate(427.787 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_202" data-name="Rectángulo 202" width="5.287" height="5.447" transform="translate(427.787 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_203" data-name="Rectángulo 203" width="5.287" height="5.447" transform="translate(427.787 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_204" data-name="Rectángulo 204" width="5.287" height="5.447" transform="translate(436.189 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_205" data-name="Rectángulo 205" width="5.287" height="5.447" transform="translate(436.189 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_206" data-name="Rectángulo 206" width="5.287" height="5.447" transform="translate(436.189 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_207" data-name="Rectángulo 207" width="5.287" height="5.447" transform="translate(436.189 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_208" data-name="Rectángulo 208" width="5.287" height="5.447" transform="translate(436.189 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_209" data-name="Rectángulo 209" width="5.287" height="5.447" transform="translate(436.189 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_210" data-name="Rectángulo 210" width="5.287" height="5.447" transform="translate(436.189 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_211" data-name="Rectángulo 211" width="5.287" height="5.447" transform="translate(436.189 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_212" data-name="Rectángulo 212" width="5.287" height="5.447" transform="translate(436.189 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_213" data-name="Rectángulo 213" width="5.287" height="5.447" transform="translate(436.189 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_214" data-name="Rectángulo 214" width="5.287" height="5.447" transform="translate(436.189 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_215" data-name="Rectángulo 215" width="5.287" height="5.447" transform="translate(444.591 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_216" data-name="Rectángulo 216" width="5.287" height="5.447" transform="translate(444.591 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_217" data-name="Rectángulo 217" width="5.287" height="5.447" transform="translate(444.591 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_218" data-name="Rectángulo 218" width="5.287" height="5.447" transform="translate(444.591 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_219" data-name="Rectángulo 219" width="5.287" height="5.447" transform="translate(444.591 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_220" data-name="Rectángulo 220" width="5.287" height="5.447" transform="translate(444.591 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_221" data-name="Rectángulo 221" width="5.287" height="5.447" transform="translate(444.591 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_222" data-name="Rectángulo 222" width="5.287" height="5.447" transform="translate(444.591 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_223" data-name="Rectángulo 223" width="5.287" height="5.447" transform="translate(444.591 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_224" data-name="Rectángulo 224" width="5.287" height="5.447" transform="translate(444.591 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_225" data-name="Rectángulo 225" width="5.287" height="5.447" transform="translate(444.591 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_226" data-name="Rectángulo 226" width="5.287" height="5.447" transform="translate(444.591 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_227" data-name="Rectángulo 227" width="5.287" height="5.447" transform="translate(444.591 585.478)" fill="#f0f0f0" />
                        <rect id="Rectángulo_228" data-name="Rectángulo 228" width="5.287" height="5.447" transform="translate(444.591 594.609)" fill="#f0f0f0" />
                        <rect id="Rectángulo_229" data-name="Rectángulo 229" width="5.287" height="5.447" transform="translate(452.992 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_230" data-name="Rectángulo 230" width="5.287" height="5.447" transform="translate(452.992 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_231" data-name="Rectángulo 231" width="5.287" height="5.447" transform="translate(452.992 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_232" data-name="Rectángulo 232" width="5.287" height="5.447" transform="translate(452.992 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_233" data-name="Rectángulo 233" width="5.287" height="5.447" transform="translate(452.992 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_234" data-name="Rectángulo 234" width="5.287" height="5.447" transform="translate(452.992 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_235" data-name="Rectángulo 235" width="5.287" height="5.447" transform="translate(452.992 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_236" data-name="Rectángulo 236" width="5.287" height="5.447" transform="translate(452.992 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_237" data-name="Rectángulo 237" width="5.287" height="5.447" transform="translate(452.992 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_238" data-name="Rectángulo 238" width="5.287" height="5.447" transform="translate(452.992 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_239" data-name="Rectángulo 239" width="5.287" height="5.447" transform="translate(452.992 585.478)" fill="#f0f0f0" />
                        <rect id="Rectángulo_240" data-name="Rectángulo 240" width="5.287" height="5.447" transform="translate(452.992 594.609)" fill="#f0f0f0" />
                        <rect id="Rectángulo_241" data-name="Rectángulo 241" width="5.287" height="5.447" transform="translate(452.992 603.74)" fill="#f0f0f0" />
                        <rect id="Rectángulo_242" data-name="Rectángulo 242" width="5.287" height="5.447" transform="translate(540.978 402.796)" fill="#f0f0f0" />
                        <rect id="Rectángulo_243" data-name="Rectángulo 243" width="5.287" height="5.447" transform="translate(540.978 411.928)" fill="#f0f0f0" />
                        <rect id="Rectángulo_244" data-name="Rectángulo 244" width="5.287" height="5.447" transform="translate(540.978 421.059)" fill="#f0f0f0" />
                        <rect id="Rectángulo_245" data-name="Rectángulo 245" width="5.287" height="5.447" transform="translate(540.978 430.19)" fill="#f0f0f0" />
                        <rect id="Rectángulo_246" data-name="Rectángulo 246" width="5.287" height="5.447" transform="translate(540.978 439.322)" fill="#f0f0f0" />
                        <rect id="Rectángulo_247" data-name="Rectángulo 247" width="5.287" height="5.447" transform="translate(540.978 448.453)" fill="#f0f0f0" />
                        <rect id="Rectángulo_248" data-name="Rectángulo 248" width="5.287" height="5.447" transform="translate(540.978 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_249" data-name="Rectángulo 249" width="5.287" height="5.447" transform="translate(540.978 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_250" data-name="Rectángulo 250" width="5.287" height="5.447" transform="translate(540.978 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_251" data-name="Rectángulo 251" width="5.287" height="5.447" transform="translate(540.978 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_252" data-name="Rectángulo 252" width="5.287" height="5.447" transform="translate(540.978 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_253" data-name="Rectángulo 253" width="5.287" height="5.447" transform="translate(540.978 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_254" data-name="Rectángulo 254" width="5.287" height="5.447" transform="translate(540.978 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_255" data-name="Rectángulo 255" width="5.287" height="5.447" transform="translate(540.978 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_256" data-name="Rectángulo 256" width="5.287" height="5.447" transform="translate(540.978 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_257" data-name="Rectángulo 257" width="5.287" height="5.447" transform="translate(540.978 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_258" data-name="Rectángulo 258" width="5.287" height="5.447" transform="translate(540.978 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_259" data-name="Rectángulo 259" width="5.287" height="5.447" transform="translate(540.978 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_260" data-name="Rectángulo 260" width="5.287" height="5.447" transform="translate(540.978 567.215)" fill="#f0f0f0" />
                        <rect id="Rectángulo_261" data-name="Rectángulo 261" width="5.287" height="5.447" transform="translate(540.978 576.346)" fill="#f0f0f0" />
                        <rect id="Rectángulo_262" data-name="Rectángulo 262" width="5.287" height="5.447" transform="translate(540.978 585.478)" fill="#f0f0f0" />
                        <rect id="Rectángulo_263" data-name="Rectángulo 263" width="5.287" height="5.447" transform="translate(540.978 594.609)" fill="#f0f0f0" />
                        <rect id="Rectángulo_264" data-name="Rectángulo 264" width="5.287" height="5.447" transform="translate(540.978 603.74)" fill="#f0f0f0" />
                        <rect id="Rectángulo_265" data-name="Rectángulo 265" width="5.287" height="5.447" transform="translate(549.379 402.796)" fill="#f0f0f0" />
                        <rect id="Rectángulo_266" data-name="Rectángulo 266" width="5.287" height="5.447" transform="translate(549.379 411.928)" fill="#f0f0f0" />
                        <rect id="Rectángulo_267" data-name="Rectángulo 267" width="5.287" height="5.447" transform="translate(549.379 421.059)" fill="#f0f0f0" />
                        <rect id="Rectángulo_268" data-name="Rectángulo 268" width="5.287" height="5.447" transform="translate(549.379 430.19)" fill="#f0f0f0" />
                        <rect id="Rectángulo_269" data-name="Rectángulo 269" width="5.287" height="5.447" transform="translate(549.379 439.322)" fill="#f0f0f0" />
                        <rect id="Rectángulo_270" data-name="Rectángulo 270" width="5.287" height="5.447" transform="translate(549.379 448.453)" fill="#f0f0f0" />
                        <rect id="Rectángulo_271" data-name="Rectángulo 271" width="5.287" height="5.447" transform="translate(549.379 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_272" data-name="Rectángulo 272" width="5.287" height="5.447" transform="translate(549.379 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_273" data-name="Rectángulo 273" width="5.287" height="5.447" transform="translate(549.379 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_274" data-name="Rectángulo 274" width="5.287" height="5.447" transform="translate(549.379 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_275" data-name="Rectángulo 275" width="5.287" height="5.447" transform="translate(549.379 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_276" data-name="Rectángulo 276" width="5.287" height="5.447" transform="translate(549.379 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_277" data-name="Rectángulo 277" width="5.287" height="5.447" transform="translate(549.379 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_278" data-name="Rectángulo 278" width="5.287" height="5.447" transform="translate(549.379 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_279" data-name="Rectángulo 279" width="5.287" height="5.447" transform="translate(549.379 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_280" data-name="Rectángulo 280" width="5.287" height="5.447" transform="translate(549.379 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_281" data-name="Rectángulo 281" width="5.287" height="5.447" transform="translate(549.379 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_282" data-name="Rectángulo 282" width="5.287" height="5.447" transform="translate(549.379 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_283" data-name="Rectángulo 283" width="5.287" height="5.447" transform="translate(549.379 567.215)" fill="#f0f0f0" />
                        <rect id="Rectángulo_284" data-name="Rectángulo 284" width="5.287" height="5.447" transform="translate(557.781 402.796)" fill="#f0f0f0" />
                        <rect id="Rectángulo_285" data-name="Rectángulo 285" width="5.287" height="5.447" transform="translate(557.781 411.928)" fill="#f0f0f0" />
                        <rect id="Rectángulo_286" data-name="Rectángulo 286" width="5.287" height="5.447" transform="translate(557.781 421.059)" fill="#f0f0f0" />
                        <rect id="Rectángulo_287" data-name="Rectángulo 287" width="5.287" height="5.447" transform="translate(557.781 430.19)" fill="#f0f0f0" />
                        <rect id="Rectángulo_288" data-name="Rectángulo 288" width="5.287" height="5.447" transform="translate(557.781 439.322)" fill="#f0f0f0" />
                        <rect id="Rectángulo_289" data-name="Rectángulo 289" width="5.287" height="5.447" transform="translate(557.781 448.453)" fill="#f0f0f0" />
                        <rect id="Rectángulo_290" data-name="Rectángulo 290" width="5.287" height="5.447" transform="translate(557.781 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_291" data-name="Rectángulo 291" width="5.287" height="5.447" transform="translate(557.781 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_292" data-name="Rectángulo 292" width="5.287" height="5.447" transform="translate(557.781 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_293" data-name="Rectángulo 293" width="5.287" height="5.447" transform="translate(557.781 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_294" data-name="Rectángulo 294" width="5.287" height="5.447" transform="translate(557.781 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_295" data-name="Rectángulo 295" width="5.287" height="5.447" transform="translate(557.781 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_296" data-name="Rectángulo 296" width="5.287" height="5.447" transform="translate(557.781 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_297" data-name="Rectángulo 297" width="5.287" height="5.447" transform="translate(557.781 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_298" data-name="Rectángulo 298" width="5.287" height="5.447" transform="translate(557.781 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_299" data-name="Rectángulo 299" width="5.287" height="5.447" transform="translate(557.781 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_300" data-name="Rectángulo 300" width="5.287" height="5.447" transform="translate(557.781 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_301" data-name="Rectángulo 301" width="5.287" height="5.447" transform="translate(557.781 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_302" data-name="Rectángulo 302" width="5.287" height="5.447" transform="translate(557.781 567.215)" fill="#f0f0f0" />
                        <rect id="Rectángulo_303" data-name="Rectángulo 303" width="5.287" height="5.447" transform="translate(566.182 402.796)" fill="#f0f0f0" />
                        <rect id="Rectángulo_304" data-name="Rectángulo 304" width="5.287" height="5.447" transform="translate(566.182 411.928)" fill="#f0f0f0" />
                        <rect id="Rectángulo_305" data-name="Rectángulo 305" width="5.287" height="5.447" transform="translate(566.182 421.059)" fill="#f0f0f0" />
                        <rect id="Rectángulo_306" data-name="Rectángulo 306" width="5.287" height="5.447" transform="translate(566.182 430.19)" fill="#f0f0f0" />
                        <rect id="Rectángulo_307" data-name="Rectángulo 307" width="5.287" height="5.447" transform="translate(566.182 439.322)" fill="#f0f0f0" />
                        <rect id="Rectángulo_308" data-name="Rectángulo 308" width="5.287" height="5.447" transform="translate(566.182 448.453)" fill="#f0f0f0" />
                        <rect id="Rectángulo_309" data-name="Rectángulo 309" width="5.287" height="5.447" transform="translate(566.182 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_310" data-name="Rectángulo 310" width="5.287" height="5.447" transform="translate(566.182 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_311" data-name="Rectángulo 311" width="5.287" height="5.447" transform="translate(566.182 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_312" data-name="Rectángulo 312" width="5.287" height="5.447" transform="translate(566.182 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_313" data-name="Rectángulo 313" width="5.287" height="5.447" transform="translate(566.182 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_314" data-name="Rectángulo 314" width="5.287" height="5.447" transform="translate(566.182 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_315" data-name="Rectángulo 315" width="5.287" height="5.447" transform="translate(566.182 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_316" data-name="Rectángulo 316" width="5.287" height="5.447" transform="translate(566.182 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_317" data-name="Rectángulo 317" width="5.287" height="5.447" transform="translate(566.182 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_318" data-name="Rectángulo 318" width="5.287" height="5.447" transform="translate(574.566 402.796)" fill="#f0f0f0" />
                        <rect id="Rectángulo_319" data-name="Rectángulo 319" width="5.287" height="5.447" transform="translate(574.566 411.928)" fill="#f0f0f0" />
                        <rect id="Rectángulo_320" data-name="Rectángulo 320" width="5.287" height="5.447" transform="translate(574.566 421.059)" fill="#f0f0f0" />
                        <rect id="Rectángulo_321" data-name="Rectángulo 321" width="5.287" height="5.447" transform="translate(574.566 430.19)" fill="#f0f0f0" />
                        <rect id="Rectángulo_322" data-name="Rectángulo 322" width="5.287" height="5.447" transform="translate(574.566 439.322)" fill="#f0f0f0" />
                        <rect id="Rectángulo_323" data-name="Rectángulo 323" width="5.287" height="5.447" transform="translate(574.566 448.453)" fill="#f0f0f0" />
                        <rect id="Rectángulo_324" data-name="Rectángulo 324" width="5.287" height="5.447" transform="translate(574.566 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_325" data-name="Rectángulo 325" width="5.287" height="5.447" transform="translate(574.566 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_326" data-name="Rectángulo 326" width="5.287" height="5.447" transform="translate(574.566 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_327" data-name="Rectángulo 327" width="5.287" height="5.447" transform="translate(574.566 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_328" data-name="Rectángulo 328" width="5.287" height="5.447" transform="translate(574.566 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_329" data-name="Rectángulo 329" width="5.287" height="5.447" transform="translate(574.566 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_330" data-name="Rectángulo 330" width="5.287" height="5.447" transform="translate(574.566 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_331" data-name="Rectángulo 331" width="5.287" height="5.447" transform="translate(582.968 402.796)" fill="#f0f0f0" />
                        <rect id="Rectángulo_332" data-name="Rectángulo 332" width="5.287" height="5.447" transform="translate(582.968 411.928)" fill="#f0f0f0" />
                        <rect id="Rectángulo_333" data-name="Rectángulo 333" width="5.287" height="5.447" transform="translate(582.968 421.059)" fill="#f0f0f0" />
                        <rect id="Rectángulo_334" data-name="Rectángulo 334" width="5.287" height="5.447" transform="translate(582.968 430.19)" fill="#f0f0f0" />
                        <rect id="Rectángulo_335" data-name="Rectángulo 335" width="5.287" height="5.447" transform="translate(582.968 439.322)" fill="#f0f0f0" />
                        <rect id="Rectángulo_336" data-name="Rectángulo 336" width="5.287" height="5.447" transform="translate(582.968 448.453)" fill="#f0f0f0" />
                        <rect id="Rectángulo_337" data-name="Rectángulo 337" width="5.287" height="5.447" transform="translate(582.968 457.602)" fill="#f0f0f0" />
                        <rect id="Rectángulo_338" data-name="Rectángulo 338" width="5.287" height="5.447" transform="translate(582.968 466.734)" fill="#f0f0f0" />
                        <rect id="Rectángulo_339" data-name="Rectángulo 339" width="5.287" height="5.447" transform="translate(582.968 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_340" data-name="Rectángulo 340" width="5.287" height="5.447" transform="translate(582.968 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_341" data-name="Rectángulo 341" width="5.287" height="5.447" transform="translate(582.968 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_342" data-name="Rectángulo 342" width="5.287" height="5.447" transform="translate(582.968 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_343" data-name="Rectángulo 343" width="5.287" height="5.447" transform="translate(256.142 464.01)" fill="#f0f0f0" />
                        <rect id="Rectángulo_344" data-name="Rectángulo 344" width="5.287" height="5.447" transform="translate(256.142 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_345" data-name="Rectángulo 345" width="5.287" height="5.447" transform="translate(256.142 482.273)" fill="#f0f0f0" />
                        <rect id="Rectángulo_346" data-name="Rectángulo 346" width="5.287" height="5.447" transform="translate(256.142 491.405)" fill="#f0f0f0" />
                        <rect id="Rectángulo_347" data-name="Rectángulo 347" width="5.287" height="5.447" transform="translate(256.142 500.536)" fill="#f0f0f0" />
                        <rect id="Rectángulo_348" data-name="Rectángulo 348" width="5.287" height="5.447" transform="translate(256.142 509.667)" fill="#f0f0f0" />
                        <rect id="Rectángulo_349" data-name="Rectángulo 349" width="5.287" height="5.447" transform="translate(256.142 518.817)" fill="#f0f0f0" />
                        <rect id="Rectángulo_350" data-name="Rectángulo 350" width="5.287" height="5.447" transform="translate(256.142 527.948)" fill="#f0f0f0" />
                        <rect id="Rectángulo_351" data-name="Rectángulo 351" width="5.287" height="5.447" transform="translate(256.142 537.079)" fill="#f0f0f0" />
                        <rect id="Rectángulo_352" data-name="Rectángulo 352" width="5.287" height="5.447" transform="translate(256.142 546.211)" fill="#f0f0f0" />
                        <rect id="Rectángulo_353" data-name="Rectángulo 353" width="5.287" height="5.447" transform="translate(256.142 555.342)" fill="#f0f0f0" />
                        <rect id="Rectángulo_354" data-name="Rectángulo 354" width="5.287" height="5.447" transform="translate(256.142 564.474)" fill="#f0f0f0" />
                        <rect id="Rectángulo_355" data-name="Rectángulo 355" width="5.287" height="5.447" transform="translate(256.142 573.623)" fill="#f0f0f0" />
                        <rect id="Rectángulo_356" data-name="Rectángulo 356" width="5.287" height="5.447" transform="translate(256.142 591.886)" fill="#f0f0f0" />
                        <rect id="Rectángulo_357" data-name="Rectángulo 357" width="5.287" height="5.447" transform="translate(256.142 601.017)" fill="#f0f0f0" />
                        <rect id="Rectángulo_358" data-name="Rectángulo 358" width="5.287" height="5.447" transform="translate(256.142 610.148)" fill="#f0f0f0" />
                        <rect id="Rectángulo_359" data-name="Rectángulo 359" width="5.287" height="5.447" transform="translate(256.142 619.28)" fill="#f0f0f0" />
                        <rect id="Rectángulo_360" data-name="Rectángulo 360" width="5.287" height="5.447" transform="translate(256.142 637.56)" fill="#f0f0f0" />
                        <rect id="Rectángulo_361" data-name="Rectángulo 361" width="5.287" height="5.447" transform="translate(256.142 646.692)" fill="#f0f0f0" />
                        <rect id="Rectángulo_362" data-name="Rectángulo 362" width="5.287" height="5.447" transform="translate(256.142 655.823)" fill="#f0f0f0" />
                        <rect id="Rectángulo_363" data-name="Rectángulo 363" width="5.287" height="5.447" transform="translate(264.544 464.01)" fill="#f0f0f0" />
                        <rect id="Rectángulo_364" data-name="Rectángulo 364" width="5.287" height="5.447" transform="translate(264.544 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_365" data-name="Rectángulo 365" width="5.287" height="5.447" transform="translate(264.544 482.273)" fill="#f0f0f0" />
                        <rect id="Rectángulo_366" data-name="Rectángulo 366" width="5.287" height="5.447" transform="translate(264.544 491.405)" fill="#f0f0f0" />
                        <rect id="Rectángulo_367" data-name="Rectángulo 367" width="5.287" height="5.447" transform="translate(264.544 500.536)" fill="#f0f0f0" />
                        <rect id="Rectángulo_368" data-name="Rectángulo 368" width="5.287" height="5.447" transform="translate(264.544 509.667)" fill="#f0f0f0" />
                        <rect id="Rectángulo_369" data-name="Rectángulo 369" width="5.287" height="5.447" transform="translate(264.544 518.817)" fill="#f0f0f0" />
                        <rect id="Rectángulo_370" data-name="Rectángulo 370" width="5.287" height="5.447" transform="translate(264.544 527.948)" fill="#f0f0f0" />
                        <rect id="Rectángulo_371" data-name="Rectángulo 371" width="5.287" height="5.447" transform="translate(264.544 537.079)" fill="#f0f0f0" />
                        <rect id="Rectángulo_372" data-name="Rectángulo 372" width="5.287" height="5.447" transform="translate(264.544 546.211)" fill="#f0f0f0" />
                        <rect id="Rectángulo_373" data-name="Rectángulo 373" width="5.287" height="5.447" transform="translate(264.544 555.342)" fill="#f0f0f0" />
                        <rect id="Rectángulo_374" data-name="Rectángulo 374" width="5.287" height="5.447" transform="translate(264.544 564.474)" fill="#f0f0f0" />
                        <rect id="Rectángulo_375" data-name="Rectángulo 375" width="5.287" height="5.447" transform="translate(264.544 573.623)" fill="#f0f0f0" />
                        <rect id="Rectángulo_376" data-name="Rectángulo 376" width="5.287" height="5.447" transform="translate(264.544 601.017)" fill="#f0f0f0" />
                        <rect id="Rectángulo_377" data-name="Rectángulo 377" width="5.287" height="5.447" transform="translate(264.544 610.148)" fill="#f0f0f0" />
                        <rect id="Rectángulo_378" data-name="Rectángulo 378" width="5.287" height="5.447" transform="translate(264.544 628.429)" fill="#f0f0f0" />
                        <rect id="Rectángulo_379" data-name="Rectángulo 379" width="5.287" height="5.447" transform="translate(264.544 637.56)" fill="#f0f0f0" />
                        <rect id="Rectángulo_380" data-name="Rectángulo 380" width="5.287" height="5.447" transform="translate(264.544 646.692)" fill="#f0f0f0" />
                        <rect id="Rectángulo_381" data-name="Rectángulo 381" width="5.287" height="5.447" transform="translate(264.544 655.823)" fill="#f0f0f0" />
                        <rect id="Rectángulo_382" data-name="Rectángulo 382" width="5.287" height="5.447" transform="translate(272.927 464.01)" fill="#f0f0f0" />
                        <rect id="Rectángulo_383" data-name="Rectángulo 383" width="5.287" height="5.447" transform="translate(272.927 473.142)" fill="#f0f0f0" />
                        <rect id="Rectángulo_384" data-name="Rectángulo 384" width="5.287" height="5.447" transform="translate(272.927 482.273)" fill="#f0f0f0" />
                        <rect id="Rectángulo_385" data-name="Rectángulo 385" width="5.287" height="5.447" transform="translate(272.927 491.405)" fill="#f0f0f0" />
                        <rect id="Rectángulo_386" data-name="Rectángulo 386" width="5.287" height="5.447" transform="translate(272.927 500.536)" fill="#f0f0f0" />
                        <rect id="Rectángulo_387" data-name="Rectángulo 387" width="5.287" height="5.447" transform="translate(272.927 509.667)" fill="#f0f0f0" />
                        <rect id="Rectángulo_388" data-name="Rectángulo 388" width="5.287" height="5.447" transform="translate(272.927 518.817)" fill="#f0f0f0" />
                        <rect id="Rectángulo_389" data-name="Rectángulo 389" width="5.287" height="5.447" transform="translate(272.927 527.948)" fill="#f0f0f0" />
                        <rect id="Rectángulo_390" data-name="Rectángulo 390" width="5.287" height="5.447" transform="translate(272.927 537.079)" fill="#f0f0f0" />
                        <rect id="Rectángulo_391" data-name="Rectángulo 391" width="5.287" height="5.447" transform="translate(272.927 546.211)" fill="#f0f0f0" />
                        <rect id="Rectángulo_392" data-name="Rectángulo 392" width="5.287" height="5.447" transform="translate(272.927 555.342)" fill="#f0f0f0" />
                        <rect id="Rectángulo_393" data-name="Rectángulo 393" width="5.287" height="5.447" transform="translate(272.927 564.474)" fill="#f0f0f0" />
                        <rect id="Rectángulo_394" data-name="Rectángulo 394" width="5.287" height="5.447" transform="translate(272.927 573.623)" fill="#f0f0f0" />
                        <rect id="Rectángulo_395" data-name="Rectángulo 395" width="5.287" height="5.447" transform="translate(272.927 582.754)" fill="#f0f0f0" />
                        <rect id="Rectángulo_396" data-name="Rectángulo 396" width="5.287" height="5.447" transform="translate(272.927 601.017)" fill="#f0f0f0" />
                        <rect id="Rectángulo_397" data-name="Rectángulo 397" width="5.287" height="5.447" transform="translate(272.927 619.28)" fill="#f0f0f0" />
                        <rect id="Rectángulo_398" data-name="Rectángulo 398" width="5.287" height="5.447" transform="translate(272.927 628.429)" fill="#f0f0f0" />
                        <rect id="Rectángulo_399" data-name="Rectángulo 399" width="5.287" height="5.447" transform="translate(272.927 637.56)" fill="#f0f0f0" />
                        <rect id="Rectángulo_400" data-name="Rectángulo 400" width="5.287" height="5.447" transform="translate(272.927 646.692)" fill="#f0f0f0" />
                        <rect id="Rectángulo_401" data-name="Rectángulo 401" width="5.287" height="5.447" transform="translate(272.927 655.823)" fill="#f0f0f0" />
                        <rect id="Rectángulo_402" data-name="Rectángulo 402" width="5.287" height="5.447" transform="translate(221.93 516.093)" fill="#f0f0f0" />
                        <rect id="Rectángulo_403" data-name="Rectángulo 403" width="5.287" height="5.447" transform="translate(221.93 525.225)" fill="#f0f0f0" />
                        <rect id="Rectángulo_404" data-name="Rectángulo 404" width="5.287" height="5.447" transform="translate(221.93 534.356)" fill="#f0f0f0" />
                        <rect id="Rectángulo_405" data-name="Rectángulo 405" width="5.287" height="5.447" transform="translate(221.93 543.487)" fill="#f0f0f0" />
                        <rect id="Rectángulo_406" data-name="Rectángulo 406" width="5.287" height="5.447" transform="translate(221.93 552.619)" fill="#f0f0f0" />
                        <rect id="Rectángulo_407" data-name="Rectángulo 407" width="5.287" height="5.447" transform="translate(221.93 561.75)" fill="#f0f0f0" />
                        <rect id="Rectángulo_408" data-name="Rectángulo 408" width="5.287" height="5.447" transform="translate(221.93 589.162)" fill="#f0f0f0" />
                        <rect id="Rectángulo_409" data-name="Rectángulo 409" width="5.287" height="5.447" transform="translate(221.93 598.294)" fill="#f0f0f0" />
                        <rect id="Rectángulo_410" data-name="Rectángulo 410" width="5.287" height="5.447" transform="translate(221.93 607.425)" fill="#f0f0f0" />
                        <rect id="Rectángulo_411" data-name="Rectángulo 411" width="5.287" height="5.447" transform="translate(221.93 616.556)" fill="#f0f0f0" />
                        <rect id="Rectángulo_412" data-name="Rectángulo 412" width="5.287" height="5.447" transform="translate(221.93 625.706)" fill="#f0f0f0" />
                        <rect id="Rectángulo_413" data-name="Rectángulo 413" width="5.287" height="5.447" transform="translate(221.93 634.837)" fill="#f0f0f0" />
                        <rect id="Rectángulo_414" data-name="Rectángulo 414" width="5.287" height="5.447" transform="translate(221.93 643.968)" fill="#f0f0f0" />
                        <rect id="Rectángulo_415" data-name="Rectángulo 415" width="5.287" height="5.447" transform="translate(230.332 516.093)" fill="#f0f0f0" />
                        <rect id="Rectángulo_416" data-name="Rectángulo 416" width="5.287" height="5.447" transform="translate(230.332 525.225)" fill="#f0f0f0" />
                        <rect id="Rectángulo_417" data-name="Rectángulo 417" width="5.287" height="5.447" transform="translate(230.332 534.356)" fill="#f0f0f0" />
                        <rect id="Rectángulo_418" data-name="Rectángulo 418" width="5.287" height="5.447" transform="translate(230.332 543.487)" fill="#f0f0f0" />
                        <rect id="Rectángulo_419" data-name="Rectángulo 419" width="5.287" height="5.447" transform="translate(230.332 552.619)" fill="#f0f0f0" />
                        <rect id="Rectángulo_420" data-name="Rectángulo 420" width="5.287" height="5.447" transform="translate(230.332 561.75)" fill="#f0f0f0" />
                        <rect id="Rectángulo_421" data-name="Rectángulo 421" width="5.287" height="5.447" transform="translate(230.332 589.162)" fill="#f0f0f0" />
                        <rect id="Rectángulo_422" data-name="Rectángulo 422" width="5.287" height="5.447" transform="translate(230.332 598.294)" fill="#f0f0f0" />
                        <rect id="Rectángulo_423" data-name="Rectángulo 423" width="5.287" height="5.447" transform="translate(230.332 607.425)" fill="#f0f0f0" />
                        <rect id="Rectángulo_424" data-name="Rectángulo 424" width="5.287" height="5.447" transform="translate(230.332 616.556)" fill="#f0f0f0" />
                        <rect id="Rectángulo_425" data-name="Rectángulo 425" width="5.287" height="5.447" transform="translate(230.332 625.706)" fill="#f0f0f0" />
                        <rect id="Rectángulo_426" data-name="Rectángulo 426" width="5.287" height="5.447" transform="translate(230.332 634.837)" fill="#f0f0f0" />
                        <rect id="Rectángulo_427" data-name="Rectángulo 427" width="5.287" height="5.447" transform="translate(230.332 653.1)" fill="#f0f0f0" />
                        <rect id="Rectángulo_428" data-name="Rectángulo 428" width="5.287" height="5.447" transform="translate(509.276 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_429" data-name="Rectángulo 429" width="5.287" height="5.447" transform="translate(509.276 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_430" data-name="Rectángulo 430" width="5.287" height="5.447" transform="translate(509.276 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_431" data-name="Rectángulo 431" width="5.287" height="5.447" transform="translate(509.276 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_432" data-name="Rectángulo 432" width="5.287" height="5.447" transform="translate(509.276 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_433" data-name="Rectángulo 433" width="5.287" height="5.447" transform="translate(509.276 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_434" data-name="Rectángulo 434" width="5.287" height="5.447" transform="translate(509.276 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_435" data-name="Rectángulo 435" width="5.287" height="5.447" transform="translate(509.276 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_436" data-name="Rectángulo 436" width="5.287" height="5.447" transform="translate(509.276 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_437" data-name="Rectángulo 437" width="5.287" height="5.447" transform="translate(509.276 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_438" data-name="Rectángulo 438" width="5.287" height="5.447" transform="translate(509.276 567.215)" fill="#f0f0f0" />
                        <rect id="Rectángulo_439" data-name="Rectángulo 439" width="5.287" height="5.447" transform="translate(509.276 585.478)" fill="#f0f0f0" />
                        <rect id="Rectángulo_440" data-name="Rectángulo 440" width="5.287" height="5.447" transform="translate(509.276 594.609)" fill="#f0f0f0" />
                        <rect id="Rectángulo_441" data-name="Rectángulo 441" width="5.287" height="5.447" transform="translate(509.276 603.74)" fill="#f0f0f0" />
                        <rect id="Rectángulo_442" data-name="Rectángulo 442" width="5.287" height="5.447" transform="translate(509.276 612.872)" fill="#f0f0f0" />
                        <rect id="Rectángulo_443" data-name="Rectángulo 443" width="5.287" height="5.447" transform="translate(509.276 622.021)" fill="#f0f0f0" />
                        <rect id="Rectángulo_444" data-name="Rectángulo 444" width="5.287" height="5.447" transform="translate(509.276 631.152)" fill="#f0f0f0" />
                        <rect id="Rectángulo_445" data-name="Rectángulo 445" width="5.287" height="5.447" transform="translate(509.276 640.284)" fill="#f0f0f0" />
                        <rect id="Rectángulo_446" data-name="Rectángulo 446" width="5.287" height="5.447" transform="translate(509.276 649.415)" fill="#f0f0f0" />
                        <rect id="Rectángulo_447" data-name="Rectángulo 447" width="5.287" height="5.447" transform="translate(517.66 475.865)" fill="#f0f0f0" />
                        <rect id="Rectángulo_448" data-name="Rectángulo 448" width="5.287" height="5.447" transform="translate(517.66 484.997)" fill="#f0f0f0" />
                        <rect id="Rectángulo_449" data-name="Rectángulo 449" width="5.287" height="5.447" transform="translate(517.66 494.128)" fill="#f0f0f0" />
                        <rect id="Rectángulo_450" data-name="Rectángulo 450" width="5.287" height="5.447" transform="translate(517.66 503.259)" fill="#f0f0f0" />
                        <rect id="Rectángulo_451" data-name="Rectángulo 451" width="5.287" height="5.447" transform="translate(517.66 512.409)" fill="#f0f0f0" />
                        <rect id="Rectángulo_452" data-name="Rectángulo 452" width="5.287" height="5.447" transform="translate(517.66 521.54)" fill="#f0f0f0" />
                        <rect id="Rectángulo_453" data-name="Rectángulo 453" width="5.287" height="5.447" transform="translate(517.66 530.671)" fill="#f0f0f0" />
                        <rect id="Rectángulo_454" data-name="Rectángulo 454" width="5.287" height="5.447" transform="translate(517.66 539.803)" fill="#f0f0f0" />
                        <rect id="Rectángulo_455" data-name="Rectángulo 455" width="5.287" height="5.447" transform="translate(517.66 548.934)" fill="#f0f0f0" />
                        <rect id="Rectángulo_456" data-name="Rectángulo 456" width="5.287" height="5.447" transform="translate(517.66 558.066)" fill="#f0f0f0" />
                        <rect id="Rectángulo_457" data-name="Rectángulo 457" width="5.287" height="5.447" transform="translate(517.66 567.215)" fill="#f0f0f0" />
                        <rect id="Rectángulo_458" data-name="Rectángulo 458" width="5.287" height="5.447" transform="translate(517.66 576.346)" fill="#f0f0f0" />
                        <rect id="Rectángulo_459" data-name="Rectángulo 459" width="5.287" height="5.447" transform="translate(517.66 585.478)" fill="#f0f0f0" />
                        <rect id="Rectángulo_460" data-name="Rectángulo 460" width="5.287" height="5.447" transform="translate(517.66 594.609)" fill="#f0f0f0" />
                        <rect id="Rectángulo_461" data-name="Rectángulo 461" width="5.287" height="5.447" transform="translate(517.66 603.74)" fill="#f0f0f0" />
                        <rect id="Rectángulo_462" data-name="Rectángulo 462" width="5.287" height="5.447" transform="translate(517.66 612.872)" fill="#f0f0f0" />
                        <rect id="Rectángulo_463" data-name="Rectángulo 463" width="5.287" height="5.447" transform="translate(517.66 622.021)" fill="#f0f0f0" />
                        <rect id="Rectángulo_464" data-name="Rectángulo 464" width="5.287" height="5.447" transform="translate(517.66 631.152)" fill="#f0f0f0" />
                        <rect id="Rectángulo_465" data-name="Rectángulo 465" width="5.287" height="5.447" transform="translate(517.66 640.284)" fill="#f0f0f0" />
                        <rect id="Rectángulo_466" data-name="Rectángulo 466" width="5.287" height="5.447" transform="translate(517.66 649.415)" fill="#f0f0f0" />
                        <rect id="Rectángulo_467" data-name="Rectángulo 467" width="5.287" height="5.447" transform="translate(467.909 511.447)" fill="#f0f0f0" />
                        <rect id="Rectángulo_468" data-name="Rectángulo 468" width="5.287" height="5.447" transform="translate(467.909 520.579)" fill="#f0f0f0" />
                        <rect id="Rectángulo_469" data-name="Rectángulo 469" width="5.287" height="5.447" transform="translate(467.909 529.71)" fill="#f0f0f0" />
                        <rect id="Rectángulo_470" data-name="Rectángulo 470" width="5.287" height="5.447" transform="translate(467.909 538.842)" fill="#f0f0f0" />
                        <rect id="Rectángulo_471" data-name="Rectángulo 471" width="5.287" height="5.447" transform="translate(467.909 547.973)" fill="#f0f0f0" />
                        <rect id="Rectángulo_472" data-name="Rectángulo 472" width="5.287" height="5.447" transform="translate(467.909 557.104)" fill="#f0f0f0" />
                        <rect id="Rectángulo_473" data-name="Rectángulo 473" width="5.287" height="5.447" transform="translate(467.909 566.254)" fill="#f0f0f0" />
                        <rect id="Rectángulo_474" data-name="Rectángulo 474" width="5.287" height="5.447" transform="translate(467.909 575.385)" fill="#f0f0f0" />
                        <rect id="Rectángulo_475" data-name="Rectángulo 475" width="5.287" height="5.447" transform="translate(467.909 584.516)" fill="#f0f0f0" />
                        <rect id="Rectángulo_476" data-name="Rectángulo 476" width="5.287" height="5.447" transform="translate(467.909 593.648)" fill="#f0f0f0" />
                        <rect id="Rectángulo_477" data-name="Rectángulo 477" width="5.287" height="5.447" transform="translate(476.31 511.447)" fill="#f0f0f0" />
                        <rect id="Rectángulo_478" data-name="Rectángulo 478" width="5.287" height="5.447" transform="translate(476.31 520.579)" fill="#f0f0f0" />
                        <rect id="Rectángulo_479" data-name="Rectángulo 479" width="5.287" height="5.447" transform="translate(476.31 529.71)" fill="#f0f0f0" />
                        <rect id="Rectángulo_480" data-name="Rectángulo 480" width="5.287" height="5.447" transform="translate(476.31 538.842)" fill="#f0f0f0" />
                        <rect id="Rectángulo_481" data-name="Rectángulo 481" width="5.287" height="5.447" transform="translate(476.31 547.973)" fill="#f0f0f0" />
                        <rect id="Rectángulo_482" data-name="Rectángulo 482" width="5.287" height="5.447" transform="translate(476.31 557.104)" fill="#f0f0f0" />
                        <rect id="Rectángulo_483" data-name="Rectángulo 483" width="5.287" height="5.447" transform="translate(476.31 566.254)" fill="#f0f0f0" />
                        <rect id="Rectángulo_484" data-name="Rectángulo 484" width="5.287" height="5.447" transform="translate(476.31 575.385)" fill="#f0f0f0" />
                        <rect id="Rectángulo_485" data-name="Rectángulo 485" width="5.287" height="5.447" transform="translate(476.31 584.516)" fill="#f0f0f0" />
                        <path id="Trazado_223" data-name="Trazado 223" d="M221.112,180.083a9.843,9.843,0,0,1,9.719-10,9.522,9.522,0,0,1,2.777.409,21.753,21.753,0,0,1-.214-3.062,20.9,20.9,0,0,1,20.577-21.2,20.433,20.433,0,0,1,3.791.356,17.8,17.8,0,0,1,15.344-8.9,18.263,18.263,0,0,1,18,18.263h.3a17.088,17.088,0,0,1,0,34.158H230.546a9.879,9.879,0,0,1-9.434-10.021Z" fill="#f5f5f5" />
                        <path id="Trazado_224" data-name="Trazado 224" d="M406.018,278.107a9.879,9.879,0,0,1,9.719-10.021,9.755,9.755,0,0,1,2.795.427,21.807,21.807,0,0,1-.231-3.079,20.9,20.9,0,0,1,20.577-21.2,19.027,19.027,0,0,1,3.791.374,17.8,17.8,0,0,1,15.361-8.9,18.263,18.263,0,0,1,17.978,18.281h.3a17.088,17.088,0,0,1,0,34.158H415.47a9.861,9.861,0,0,1-9.452-10.039Z" fill="#f5f5f5" />
                        <path id="Trazado_225" data-name="Trazado 225" d="M226.9,368.46a9.879,9.879,0,0,1,9.719-10.021,9.649,9.649,0,0,1,2.795.427,21.822,21.822,0,0,1-.214-3.079,20.879,20.879,0,0,1,20.559-21.146,19.029,19.029,0,0,1,3.791.374,17.8,17.8,0,0,1,15.361-8.9,18.263,18.263,0,0,1,17.978,18.281h.374a17.088,17.088,0,0,1,0,34.158H236.348A9.861,9.861,0,0,1,226.9,368.46Z" fill="#f5f5f5" />
                        <path id="Trazado_226" data-name="Trazado 226" d="M682.452,246.423a5.981,5.981,0,0,1,5.874-6.052,5.892,5.892,0,0,1,1.691.267,12.857,12.857,0,0,1-.125-1.869,12.62,12.62,0,0,1,12.46-12.816,12.245,12.245,0,0,1,2.3.231,10.787,10.787,0,0,1,9.274-5.34A11.036,11.036,0,0,1,724.8,231.9h.178a10.324,10.324,0,0,1,0,20.648h-36.81a5.963,5.963,0,0,1-5.714-6.123Z" fill="#f5f5f5" />
                        <path id="Trazado_227" data-name="Trazado 227" d="M123.14,253.864a5.963,5.963,0,0,1,5.874-6.052,5.892,5.892,0,0,1,1.78.249,12.7,12.7,0,0,1,12.318-14.6,12.246,12.246,0,0,1,2.3.214,10.787,10.787,0,0,1,9.274-5.34,11.036,11.036,0,0,1,10.876,11.036h.178a10.324,10.324,0,0,1,0,20.648H128.854A5.963,5.963,0,0,1,123.14,253.864Z" fill="#f5f5f5" />
                        <path id="Trazado_228" data-name="Trazado 228" d="M569.938,182.112a5.963,5.963,0,0,1,5.874-6.052,5.34,5.34,0,0,1,1.691.267,12.855,12.855,0,0,1-.125-1.78,12.62,12.62,0,0,1,12.46-12.816,12.247,12.247,0,0,1,2.3.231,10.787,10.787,0,0,1,9.274-5.34,11.036,11.036,0,0,1,10.912,10.911h.178a10.324,10.324,0,0,1,0,20.648H575.652a5.963,5.963,0,0,1-5.714-6.07Z" fill="#f5f5f5" />
                    </g>
                    <g id="freepik--Shadow--inject-19">
                        <ellipse id="freepik--path--inject-19" cx="345.124" cy="20.15" rx="345.124" ry="20.15" transform="translate(99.876 720.758)" fill="#f5f5f5" />
                    </g>
                    <g id="freepik--Plant--inject-19">
                        <path id="Trazado_229" data-name="Trazado 229" d="M161.428,600.127c.374,2.617-6.728,4.325-12.46,5.34.463,4.753,3.56,9.541,7.992,14.026,5.5-3.1,13.332-7.12,14.774-6.177s-6.444,6.283-11.463,9.327a103.235,103.235,0,0,0,11.374,8.615c2.456-2.3,5.34-4.308,7.12-3.222s1.3,4.681.409,7.868c5.981,3.56,10.449,5.607,10.449,5.607a120.152,120.152,0,0,0,3.987-16.963c-.285-.605-.587-1.21-.872-1.78-.961-2.225,0-3.186,1.566-3.56a59.843,59.843,0,0,0,.107-12.229c-6.764-1.406-14.988-4.041-11.908-8.1,1.78-2.439,5.34-2.723,8.793-2.1a15.326,15.326,0,0,0-1.673-2.278c-12.3-13.564-20.879,0-20.879,0-7.12-5.963-17.213-4.343-19.384,4.966C153.276,598.418,160.965,596.887,161.428,600.127Z" fill="#263238" />
                        <path id="Trazado_230" data-name="Trazado 230" d="M161.428,600.127c.374,2.617-6.728,4.325-12.46,5.34.463,4.753,3.56,9.541,7.992,14.026,5.5-3.1,13.332-7.12,14.774-6.177s-6.444,6.283-11.463,9.327a103.235,103.235,0,0,0,11.374,8.615c2.456-2.3,5.34-4.308,7.12-3.222s1.3,4.681.409,7.868c5.981,3.56,10.449,5.607,10.449,5.607a120.152,120.152,0,0,0,3.987-16.963c-.285-.605-.587-1.21-.872-1.78-.961-2.225,0-3.186,1.566-3.56a59.843,59.843,0,0,0,.107-12.229c-6.764-1.406-14.988-4.041-11.908-8.1,1.78-2.439,5.34-2.723,8.793-2.1a15.326,15.326,0,0,0-1.673-2.278c-12.3-13.564-20.879,0-20.879,0-7.12-5.963-17.213-4.343-19.384,4.966C153.276,598.418,160.965,596.887,161.428,600.127Z" fill="#fff" opacity="0.3" />
                        <path id="Trazado_231" data-name="Trazado 231" d="M176.772,699.771l-1.78-.142c0-.908,7.28-91.706-13.1-100.267a6.906,6.906,0,0,0-6.177.142c-7.334,3.916-10.876,19.74-10.911,19.936l-1.78-.392c.142-.676,3.738-16.857,11.837-21.075a8.7,8.7,0,0,1,7.69-.214C184.159,606.766,177.092,695.98,176.772,699.771Z" fill="#263238" />
                        <path id="Trazado_232" data-name="Trazado 232" d="M179.353,697.76c-.374-4.094-8.686-100.161,6.871-110.36,3.72-2.439,7.12-2.973,9.879-1.531,7.351,3.7,8.313,19.42,8.348,20.078l-1.78.107c0-.16-.943-15.361-7.369-18.6-2.225-1.121-4.948-.641-8.1,1.442-14.667,9.612-6.177,107.708-6.088,108.7Z" fill="#263238" />
                        <path id="Trazado_233" data-name="Trazado 233" d="M181.685,705.574c-.107-3.133-2.67-76.665,11.481-83.108a9.986,9.986,0,0,1,8.437,0c9.719,4.272,15.717,22.375,16.02,23.14l-1.78.552c0-.178-6.016-18.12-15.005-22.072a8.081,8.081,0,0,0-6.96,0c-10.858,4.948-11.232,60.52-10.449,81.417Z" fill="#263238" />
                        <path id="Trazado_234" data-name="Trazado 234" d="M178.089,702.21l-1.78-.2c2.492-21.894,7.28-80.207-.516-87.22a3.079,3.079,0,0,0-3.2-1c-5.269,2.083-8.4,21.039-9.185,28.177l-1.78-.2c.3-2.741,3.151-26.825,10.324-29.584a4.735,4.735,0,0,1,5,1.317C187.042,622.5,178.445,698.953,178.089,702.21Z" fill="#263238" />
                        <path id="Trazado_235" data-name="Trazado 235" d="M148.381,660.718h63.938l-5.34,71.627H153.721Z" fill="#013a63" />
                        <path id="Trazado_236" data-name="Trazado 236" d="M167.8,660.718l1.78,71.627h37.4l5.34-71.627Z" fill="#fff" opacity="0.2" />
                        <path id="Trazado_237" data-name="Trazado 237" d="M157.085,634.428c-.659,1.78-5.625.374-9.523-1.015-1.353,3.1-1.032,7.12.107,11.41,4.45,0,10.68.125,11.25,1.246s-6.141,1.655-10.288,1.78a73.813,73.813,0,0,0,4.058,9.22c2.314-.57,4.788-.837,5.465.427s-.8,3.346-2.439,5c2.492,4.183,4.521,7.12,4.521,7.12a83.483,83.483,0,0,0,8.277-9.1V659.1c.178-1.78,1.086-1.976,2.172-1.62a41.956,41.956,0,0,0,4.236-7.494c-3.685-3.2-7.85-7.636-4.557-9.078,1.976-.872,4.183.125,6.141,1.78a9.1,9.1,0,0,0-.249-1.976c-2.937-12.585-12.887-7.12-12.887-7.12-2.367-6.141-9.114-8.58-13.635-3.56C152.653,630.583,157.9,632.274,157.085,634.428Z" fill="#263238" />
                        <path id="Trazado_238" data-name="Trazado 238" d="M157.085,634.428c-.659,1.78-5.625.374-9.523-1.015-1.353,3.1-1.032,7.12.107,11.41,4.45,0,10.68.125,11.25,1.246s-6.141,1.655-10.288,1.78a73.813,73.813,0,0,0,4.058,9.22c2.314-.57,4.788-.837,5.465.427s-.8,3.346-2.439,5c2.492,4.183,4.521,7.12,4.521,7.12a83.483,83.483,0,0,0,8.277-9.1V659.1c.178-1.78,1.086-1.976,2.172-1.62a41.956,41.956,0,0,0,4.236-7.494c-3.685-3.2-7.85-7.636-4.557-9.078,1.976-.872,4.183.125,6.141,1.78a9.1,9.1,0,0,0-.249-1.976c-2.937-12.585-12.887-7.12-12.887-7.12-2.367-6.141-9.114-8.58-13.635-3.56C152.653,630.583,157.9,632.274,157.085,634.428Z" fill="#fff" opacity="0.3" />
                        <path id="Trazado_239" data-name="Trazado 239" d="M204.575,642.936a24.15,24.15,0,0,0-5.856,1.228,14.116,14.116,0,0,1-.854-4.237c-.409-12.887,8.9-7.458,13.706-11.25a10.52,10.52,0,0,1,8.17-2.545,15.023,15.023,0,0,0-1.1,2.207,2.029,2.029,0,0,0,1.549,2.759,6.053,6.053,0,0,0,3.56-.427,6.716,6.716,0,0,0,.926-.659,18.423,18.423,0,0,1,1.78,4.325,23.887,23.887,0,0,1,.819,5.518,19.582,19.582,0,0,0-2.154.605,2.011,2.011,0,0,0-.8,3.062,9.7,9.7,0,0,0,2.652,1.869,29.4,29.4,0,0,1-1.62,6.052h-.659a13.261,13.261,0,0,0-1.388.356,5.552,5.552,0,0,0-.765.267,2.064,2.064,0,0,0-1.21,1.566,1.994,1.994,0,0,0,.765,1.869,6.6,6.6,0,0,0,.961.587,14.453,14.453,0,0,1-5.109,5.162,52.555,52.555,0,0,1-5.447-2.884c.392-.516.783-1.032,1.139-1.566a3.009,3.009,0,0,0,.552-2.011,2.724,2.724,0,0,0-4.859-1.335,18.019,18.019,0,0,1-1.371,1.78,34.013,34.013,0,0,1-6.55-6.355h.2a19.351,19.351,0,0,1,3.56-.605,2.745,2.745,0,1,0-.694-5.447Z" fill="#263238" />
                        <path id="Trazado_240" data-name="Trazado 240" d="M204.575,642.936a24.15,24.15,0,0,0-5.856,1.228,14.116,14.116,0,0,1-.854-4.237c-.409-12.887,8.9-7.458,13.706-11.25a10.52,10.52,0,0,1,8.17-2.545,15.023,15.023,0,0,0-1.1,2.207,2.029,2.029,0,0,0,1.549,2.759,6.053,6.053,0,0,0,3.56-.427,6.716,6.716,0,0,0,.926-.659,18.423,18.423,0,0,1,1.78,4.325,23.887,23.887,0,0,1,.819,5.518,19.582,19.582,0,0,0-2.154.605,2.011,2.011,0,0,0-.8,3.062,9.7,9.7,0,0,0,2.652,1.869,29.4,29.4,0,0,1-1.62,6.052h-.659a13.261,13.261,0,0,0-1.388.356,5.552,5.552,0,0,0-.765.267,2.064,2.064,0,0,0-1.21,1.566,1.994,1.994,0,0,0,.765,1.869,6.6,6.6,0,0,0,.961.587,14.453,14.453,0,0,1-5.109,5.162,52.555,52.555,0,0,1-5.447-2.884c.392-.516.783-1.032,1.139-1.566a3.009,3.009,0,0,0,.552-2.011,2.724,2.724,0,0,0-4.859-1.335,18.019,18.019,0,0,1-1.371,1.78,34.013,34.013,0,0,1-6.55-6.355h.2a19.351,19.351,0,0,1,3.56-.605,2.745,2.745,0,1,0-.694-5.447Z" fill="#fff" opacity="0.5" />
                        <path id="Trazado_241" data-name="Trazado 241" d="M208.26,598.472a16.785,16.785,0,0,1,3.56-1.922,9.451,9.451,0,0,0-1.406-2.6c-5.447-6.96-7.9,0-12.14.107a7.12,7.12,0,0,0-5.34,2.243,9.95,9.95,0,0,1,1.549.676,1.371,1.371,0,0,1,.392,2.136,4.022,4.022,0,0,1-2.083,1.353,3.865,3.865,0,0,1-.783,0,13.4,13.4,0,0,0,.961,3.044,17,17,0,0,0,1.994,3.257,12.21,12.21,0,0,1,1.388-.623,1.388,1.388,0,0,1,1.78,1.264,6.248,6.248,0,0,1-.587,2.136,20.918,20.918,0,0,0,3.56,2.474l.392-.231c.285-.16.587-.3.89-.445a2.354,2.354,0,0,1,.534-.178,1.424,1.424,0,0,1,1.317.285,1.406,1.406,0,0,1,.409,1.317,3.562,3.562,0,0,1-.249.73,9.79,9.79,0,0,0,4.948.463,37.065,37.065,0,0,0,1.6-3.9,12.635,12.635,0,0,1-1.282-.32,1.993,1.993,0,0,1-1.175-.819,1.9,1.9,0,0,1-.249-1.424,1.78,1.78,0,0,1,.819-1.175,1.958,1.958,0,0,1,1.406-.249l1.531.374a23.264,23.264,0,0,0,.659-6.212h-.125a13.534,13.534,0,0,0-2.189,1.282,1.876,1.876,0,0,1-2.011-3.168Z" fill="#263238" />
                        <path id="Trazado_242" data-name="Trazado 242" d="M208.26,598.472a16.785,16.785,0,0,1,3.56-1.922,9.451,9.451,0,0,0-1.406-2.6c-5.447-6.96-7.9,0-12.14.107a7.12,7.12,0,0,0-5.34,2.243,9.95,9.95,0,0,1,1.549.676,1.371,1.371,0,0,1,.392,2.136,4.022,4.022,0,0,1-2.083,1.353,3.865,3.865,0,0,1-.783,0,13.4,13.4,0,0,0,.961,3.044,17,17,0,0,0,1.994,3.257,12.21,12.21,0,0,1,1.388-.623,1.388,1.388,0,0,1,1.78,1.264,6.248,6.248,0,0,1-.587,2.136,20.918,20.918,0,0,0,3.56,2.474l.392-.231c.285-.16.587-.3.89-.445a2.354,2.354,0,0,1,.534-.178,1.424,1.424,0,0,1,1.317.285,1.406,1.406,0,0,1,.409,1.317,3.562,3.562,0,0,1-.249.73,9.79,9.79,0,0,0,4.948.463,37.065,37.065,0,0,0,1.6-3.9,12.635,12.635,0,0,1-1.282-.32,1.993,1.993,0,0,1-1.175-.819,1.9,1.9,0,0,1-.249-1.424,1.78,1.78,0,0,1,.819-1.175,1.958,1.958,0,0,1,1.406-.249l1.531.374a23.264,23.264,0,0,0,.659-6.212h-.125a13.534,13.534,0,0,0-2.189,1.282,1.876,1.876,0,0,1-2.011-3.168Z" fill="#fff" opacity="0.3" />
                        <path id="Trazado_243" data-name="Trazado 243" d="M156.159,611.377c-.374,2.617,6.728,4.343,12.46,5.34-.481,4.753-3.56,9.559-8.01,14.044-5.482-3.1-13.332-7.12-14.774-6.194s6.461,6.283,11.481,9.345a105.02,105.02,0,0,1-11.356,8.669c-2.474-2.314-5.34-4.325-7.12-3.24s-1.3,4.7-.427,7.868c-5.963,3.56-10.449,5.607-10.449,5.607a120.154,120.154,0,0,1-3.987-16.963c.3-.587.605-1.193.872-1.78.961-2.225,0-3.168-1.566-3.56a59.664,59.664,0,0,1,0-12.211c6.764-1.424,14.988-4.041,11.908-8.1-1.78-2.456-5.34-2.723-8.793-2.118a14.065,14.065,0,0,1,1.655-2.278c12.318-13.564,20.9,0,20.9,0,7.12-5.963,17.195-4.343,19.366,4.966C164.312,609.686,156.64,608.155,156.159,611.377Z" fill="#263238" />
                        <path id="Trazado_244" data-name="Trazado 244" d="M156.159,611.377c-.374,2.617,6.728,4.343,12.46,5.34-.481,4.753-3.56,9.559-8.01,14.044-5.482-3.1-13.332-7.12-14.774-6.194s6.461,6.283,11.481,9.345a105.02,105.02,0,0,1-11.356,8.669c-2.474-2.314-5.34-4.325-7.12-3.24s-1.3,4.7-.427,7.868c-5.963,3.56-10.449,5.607-10.449,5.607a120.154,120.154,0,0,1-3.987-16.963c.3-.587.605-1.193.872-1.78.961-2.225,0-3.168-1.566-3.56a59.664,59.664,0,0,1,0-12.211c6.764-1.424,14.988-4.041,11.908-8.1-1.78-2.456-5.34-2.723-8.793-2.118a14.065,14.065,0,0,1,1.655-2.278c12.318-13.564,20.9,0,20.9,0,7.12-5.963,17.195-4.343,19.366,4.966C164.312,609.686,156.64,608.155,156.159,611.377Z" fill="#fff" opacity="0.5" />
                    </g>
                    <g id="freepik--Sign--inject-19">
                        <path id="Trazado_245" data-name="Trazado 245" d="M515.132,723.766V510.824H505.5V723.766l-12.353,4.806v3.774h34.318v-3.774Z" fill="#263238" />
                        <path id="Trazado_246" data-name="Trazado 246" d="M693.239,723.766V510.824h-9.63V723.766l-12.335,4.806v3.774h34.318v-3.774Z" fill="#263238" />
                        <path id="Trazado_247" data-name="Trazado 247" d="M527.485,728.572v3.774H493.149v-3.774l12.353-4.824V510.824h9.63V723.748Z" fill="#fff" opacity="0.5" />
                        <path id="Trazado_248" data-name="Trazado 248" d="M705.592,728.572v3.774H671.274v-3.774l12.335-4.824V510.824h9.63V723.748Z" fill="#fff" opacity="0.5" />
                        <path id="Trazado_249" data-name="Trazado 249" d="M505.5,510.824h9.63v20.434l-9.63-1.086Z" opacity="0.2" />
                        <path id="Trazado_250" data-name="Trazado 250" d="M693.239,510.824V551.23l-9.63-1.086v-39.32Z" opacity="0.2" />
                        <rect id="Rectángulo_486" data-name="Rectángulo 486" width="246.121" height="207.779" transform="translate(476.31 315.986)" fill="#263238" />
                        <rect id="Rectángulo_487" data-name="Rectángulo 487" width="246.637" height="25.65" transform="translate(476.043 498.133)" fill="#013a63" />
                        <rect id="Rectángulo_488" data-name="Rectángulo 488" width="246.637" height="25.65" transform="translate(476.043 315.986)" fill="#013a63" />
                        <g id="Grupo_2" data-name="Grupo 2" opacity="0.7">
                            <path id="Trazado_251" data-name="Trazado 251" d="M501.017,498.133l-18.3,25.632H476.31v-9.434l11.57-16.2Z" fill="#fff" />
                            <path id="Trazado_252" data-name="Trazado 252" d="M508.065,523.765H494.911l18.316-25.632h13.136Z" fill="#fff" />
                            <path id="Trazado_253" data-name="Trazado 253" d="M533.413,523.765H520.258l18.316-25.632h13.136Z" fill="#fff" />
                            <path id="Trazado_254" data-name="Trazado 254" d="M558.76,523.765H545.606l18.316-25.632h13.136Z" fill="#fff" />
                            <path id="Trazado_255" data-name="Trazado 255" d="M584.107,523.765H570.971l18.3-25.632h13.154Z" fill="#fff" />
                            <path id="Trazado_256" data-name="Trazado 256" d="M609.454,523.765H596.318l18.3-25.632H627.77Z" fill="#fff" />
                            <path id="Trazado_257" data-name="Trazado 257" d="M634.8,523.765H621.665l18.316-25.632h13.136Z" fill="#fff" />
                            <path id="Trazado_258" data-name="Trazado 258" d="M660.166,523.765H647.012l18.316-25.632h13.136Z" fill="#fff" />
                            <path id="Trazado_259" data-name="Trazado 259" d="M685.514,523.765H672.359l18.316-25.632h13.136Z" fill="#fff" />
                            <path id="Trazado_260" data-name="Trazado 260" d="M722.431,498.133v9.434l-11.57,16.2H697.724l18.3-25.632Z" fill="#fff" />
                        </g>
                        <g id="Grupo_3" data-name="Grupo 3" opacity="0.7">
                            <path id="Trazado_261" data-name="Trazado 261" d="M501.017,315.986l-18.3,25.65H476.31v-9.452l11.57-16.2Z" fill="#fff" />
                            <path id="Trazado_262" data-name="Trazado 262" d="M508.065,341.635H494.911l18.316-25.65h13.136Z" fill="#fff" />
                            <path id="Trazado_263" data-name="Trazado 263" d="M533.413,341.635H520.258l18.316-25.65h13.136Z" fill="#fff" />
                            <path id="Trazado_264" data-name="Trazado 264" d="M558.76,341.635H545.606l18.316-25.65h13.136Z" fill="#fff" />
                            <path id="Trazado_265" data-name="Trazado 265" d="M584.107,341.635H570.971l18.3-25.65h13.154Z" fill="#fff" />
                            <path id="Trazado_266" data-name="Trazado 266" d="M609.454,341.635H596.318l18.3-25.65H627.77Z" fill="#fff" />
                            <path id="Trazado_267" data-name="Trazado 267" d="M634.8,341.635H621.665l18.316-25.65h13.136Z" fill="#fff" />
                            <path id="Trazado_268" data-name="Trazado 268" d="M660.166,341.635H647.012l18.316-25.65h13.136Z" fill="#fff" />
                            <path id="Trazado_269" data-name="Trazado 269" d="M685.514,341.635H672.359l18.316-25.65h13.136Z" fill="#fff" />
                            <path id="Trazado_270" data-name="Trazado 270" d="M722.431,315.986v9.452l-11.57,16.2H697.724l18.3-25.65Z" fill="#fff" />
                        </g>
                        <g id="Grupo_4" data-name="Grupo 4" opacity="0.6">
                            <path className="animate-pulse" id="Trazado_271" data-name="Trazado 271" d="M567.82,450.037H555.663v15.717h-8.9V450.037h-35.6v-6.39l32.7-41.83h9.861l-31.328,40.37h24.564V428.3h8.58v13.884H567.82Z" fill="#fff" />
                            <path className="animate-pulse" id="Trazado_272" data-name="Trazado 272" d="M573.285,433.786c0-20.826,11.143-32.7,26.13-32.7s26.041,11.873,26.041,32.7-11.161,32.7-26.041,32.7S573.285,454.612,573.285,433.786Zm43.023,0c0-16.358-6.942-24.564-16.892-24.564s-16.981,8.206-16.981,24.564,6.942,24.564,16.981,24.564,16.892-8.224,16.892-24.564Z" fill="#fff" />
                            <path className="animate-pulse" id="Trazado_273" data-name="Trazado 273" d="M689.839,450.037H677.682v15.717h-8.9V450.037h-35.6v-6.39l32.7-41.83h9.879l-31.328,40.37H669V428.3h8.58v13.884h12.157Z" fill="#fff" />
                        </g>
                        <g id="Grupo_5" data-name="Grupo 5" opacity="0.6" >
                            <path id="Trazado_274" data-name="Trazado 274" d="M569.03,373.391v3.186H555.716V359.364H568.71v3.2h-9.042v3.738h7.992v3.1h-7.992v3.987Z" fill="#fff" />
                            <path id="Trazado_275" data-name="Trazado 275" d="M583.164,376.577l-3.329-4.788h-3.649v4.788H572.2V359.364h7.44c4.61,0,7.476,2.385,7.476,6.248a5.589,5.589,0,0,1-3.56,5.34l3.863,5.536Zm-3.738-13.955h-3.24v6h3.24c2.439,0,3.667-1.139,3.667-3.008S581.864,362.622,579.426,362.622Z" fill="#fff" />
                            <path id="Trazado_276" data-name="Trazado 276" d="M601.213,376.577l-3.311-4.788h-3.667v4.788h-3.987V359.364h7.458c4.592,0,7.476,2.385,7.476,6.248a5.607,5.607,0,0,1-3.56,5.34l3.845,5.536Zm-3.738-13.955h-3.24v6h3.24c2.439,0,3.667-1.139,3.667-3.008S599.86,362.622,597.475,362.622Z" fill="#fff" />
                            <path id="Trazado_277" data-name="Trazado 277" d="M607.229,367.979a9.434,9.434,0,1,1,9.416,8.9,8.9,8.9,0,0,1-9.416-8.9Zm14.792,0a5.34,5.34,0,1,0-5.34,5.5,5.251,5.251,0,0,0,5.34-5.5Z" fill="#fff" />
                            <path id="Trazado_278" data-name="Trazado 278" d="M640.017,376.577l-3.329-4.788h-3.667v4.788h-3.969V359.364h7.44c4.592,0,7.476,2.385,7.476,6.248a5.589,5.589,0,0,1-3.56,5.34l3.863,5.536Zm-3.738-13.955h-3.257v6h3.257c2.421,0,3.649-1.139,3.649-3.008S638.7,362.622,636.279,362.622Z" fill="#fff" />
                        </g>
                    </g>
                    <g id="freepik--Hole--inject-19">
                        <ellipse id="Elipse_8" data-name="Elipse 8" cx="104.272" cy="8.811" rx="104.272" ry="8.811" transform="translate(528.963 733.752)" fill="#263238" />
                    </g>
                    <g id="freepik--trafic-cone--inject-19">
                        <path id="Trazado_279" data-name="Trazado 279" d="M500.5,730.53l-24.635-122.7h-9.434l-24.653,122.7-18.1,11.089v3.275h94.34v-3.275Z" fill="#013a63" />
                        <rect id="Rectángulo_489" data-name="Rectángulo 489" width="94.34" height="4.13" transform="translate(423.676 741.619)" fill="#fff" opacity="0.2" />
                        <path id="Trazado_280" data-name="Trazado 280" d="M475.865,607.834h-9.434L441.493,730.174h58.7Z" fill="#fff" opacity="0.2" />
                        <path id="Trazado_281" data-name="Trazado 281" d="M492.312,690.462l-5.607-28.16H455.324l-5.749,28.16Z" fill="#fff" opacity="0.6" />
                    </g>
                    
                    <g id="freepik--speech-bubble--inject-19" ref={ balloonRef } >
                        <path id="Trazado_282" data-name="Trazado 282" d="M296.263,230.047H220.2a15.735,15.735,0,0,0-15.753,15.735v26.7A15.753,15.753,0,0,0,220.2,288.235h50.552L293.9,312.96l-12.46-24.724h14.916a15.753,15.753,0,0,0,15.753-15.753v-26.7a15.735,15.735,0,0,0-15.842-15.735Z" fill="#013a63" />
                        <path id="Trazado_283" data-name="Trazado 283" d="M296.263,230.047H220.2a15.735,15.735,0,0,0-15.753,15.735v26.7A15.753,15.753,0,0,0,220.2,288.235h50.552L293.9,312.96l-12.46-24.724h14.916a15.753,15.753,0,0,0,15.753-15.753v-26.7a15.735,15.735,0,0,0-15.842-15.735Z" fill="#fff" opacity="0.7" />
                        <path id="Trazado_284" data-name="Trazado 284" d="M223.924,257.673a9.025,9.025,0,1,1,9.042,8.686,8.633,8.633,0,0,1-9.042-8.686Zm15.611,0a6.6,6.6,0,1,0-6.568,6.515,6.39,6.39,0,0,0,6.568-6.515Z" fill="#013a63" />
                        <path id="Trazado_285" data-name="Trazado 285" d="M244.145,259.738a6.693,6.693,0,1,1,6.693,6.568,6.39,6.39,0,0,1-6.693-6.568Zm11.018,0a4.343,4.343,0,1,0-4.325,4.539,4.236,4.236,0,0,0,4.325-4.539Z" fill="#013a63" />
                        <path id="Trazado_286" data-name="Trazado 286" d="M274.12,259.738a6.248,6.248,0,0,1-6.5,6.568,5.518,5.518,0,0,1-4.486-2.083v6.639h-2.332V253.312h2.225v2.029a5.5,5.5,0,0,1,4.592-2.154,6.23,6.23,0,0,1,6.5,6.55Zm-2.35,0a4.343,4.343,0,1,0-4.343,4.539,4.254,4.254,0,0,0,4.272-4.539Z" fill="#013a63" />
                        <path id="Trazado_287" data-name="Trazado 287" d="M275.651,264.811l.961-1.78a8.277,8.277,0,0,0,4.521,1.335c2.154,0,3.044-.659,3.044-1.78,0-2.884-8.117-.392-8.117-5.518,0-2.3,2.065-3.845,5.34-3.845a9.345,9.345,0,0,1,4.681,1.157l-1,1.78a6.693,6.693,0,0,0-3.7-1.015c-2.047,0-3.044.748-3.044,1.78,0,3.026,8.152.552,8.152,5.554,0,2.332-2.136,3.809-5.554,3.809a9.345,9.345,0,0,1-5.287-1.477Z" fill="#013a63" />
                        <path id="Trazado_288" data-name="Trazado 288" d="M288.894,264.757a1.549,1.549,0,0,1,1.6-1.549,1.513,1.513,0,0,1,1.549,1.549,1.531,1.531,0,0,1-1.549,1.549,1.566,1.566,0,0,1-1.6-1.549Zm.214-15.575h2.812l-.463,11.623h-1.78Z" fill="#013a63" />
                    </g>
                    <g id="freepik--Character--inject-19">
                        <g id="freepik--group--inject-19">
                            <path id="Trazado_289" data-name="Trazado 289" d="M190.852,732.434l11.428,6.586,16.18-25.935-11.445-6.568Z" fill="#ffb573" />
                            <path id="Trazado_290" data-name="Trazado 290" d="M207.014,706.518l11.428,6.586-8.348,13.368-11.428-6.586Z" opacity="0.2" />
                            <path id="Trazado_291" data-name="Trazado 291" d="M205.626,730.743h-16.02a1.157,1.157,0,0,0-1.121.908l-2.6,11.73A1.976,1.976,0,0,0,187.4,745.7h.427c5.18-.089,8.9-.392,15.45-.392,4.005,0,16.02.409,21.627.409s6.266-5.465,4.005-5.963c-10.164-2.225-17.8-5.34-21.075-8.206a3.132,3.132,0,0,0-2.207-.8Z" fill="#263238" />
                            <path id="Trazado_292" data-name="Trazado 292" d="M206.48,732.577a.32.32,0,0,1-.231-.267.285.285,0,0,1,.142-.3c.481-.3,4.735-2.919,6.194-2.172a.944.944,0,0,1,.534.872,1.78,1.78,0,0,1-.659,1.673,3.9,3.9,0,0,1-2.528.676,16.022,16.022,0,0,1-3.453-.481Zm.908-.445a6.408,6.408,0,0,0,4.7-.231,1.335,1.335,0,0,0,.409-1.121c0-.249-.125-.374-.2-.374a.82.82,0,0,0-.409,0,12.907,12.907,0,0,0-4.45,1.727Z" fill="#013a63" />
                            <path id="Trazado_293" data-name="Trazado 293" d="M206.48,732.63a.32.32,0,0,1-.142-.285c0-.178.338-3.969,1.78-5.215a1.78,1.78,0,0,1,1.335-.392,1.014,1.014,0,0,1,1,.819c.267,1.388-2.367,4.29-3.72,5.037h-.142ZM208.6,727.5a7.476,7.476,0,0,0-1.566,4.13c1.371-1.032,3.044-3.222,2.866-4.076,0-.089,0-.32-.445-.32h-.16a1.121,1.121,0,0,0-.73.267Z" fill="#013a63" />
                            <path id="Trazado_294" data-name="Trazado 294" d="M375.206,735.5l13.581-1.566-3.916-29.192-13.6,1.566Z" fill="#ffb573" />
                            <path id="Trazado_295" data-name="Trazado 295" d="M371.272,706.3l13.6-1.566,2.011,15.059L373.3,721.363Z" opacity="0.2" />
                            <path id="Trazado_296" data-name="Trazado 296" d="M389.09,730.743H373.07a1.139,1.139,0,0,0-1.121.908l-2.6,11.73a1.94,1.94,0,0,0,1.5,2.314h.427c5.18-.089,8.9-.392,15.468-.392,4.005,0,16.02.409,21.627.409s6.248-5.465,3.987-5.963c-10.164-2.225-17.8-5.34-21.057-8.206A3.2,3.2,0,0,0,389.09,730.743Z" fill="#263238" />
                            <path id="Trazado_297" data-name="Trazado 297" d="M389.98,732.577a.32.32,0,0,1-.231-.267.267.267,0,0,1,.16-.3c.463-.3,4.717-2.919,6.177-2.172a.926.926,0,0,1,.534.872,1.78,1.78,0,0,1-.641,1.673,3.916,3.916,0,0,1-2.545.676,16.3,16.3,0,0,1-3.453-.48Zm.908-.445a6.408,6.408,0,0,0,4.7-.231,1.3,1.3,0,0,0,.427-1.121c0-.249-.125-.374-.214-.374a.748.748,0,0,0-.392,0A12.851,12.851,0,0,0,390.888,732.132Z" fill="#013a63" />
                            <path id="Trazado_298" data-name="Trazado 298" d="M389.909,732.63a.3.3,0,0,1-.16-.285c0-.178.338-3.969,1.78-5.215a1.673,1.673,0,0,1,1.317-.392,1.032,1.032,0,0,1,1.015.819c.267,1.388-2.367,4.29-3.72,5.037h-.16Zm2.1-5.126a7.458,7.458,0,0,0-1.549,4.13c1.353-1.032,3.026-3.222,2.866-4.076,0-.089,0-.32-.463-.32h-.142a1.139,1.139,0,0,0-.712.267Z" fill="#013a63" />
                            <path id="Trazado_299" data-name="Trazado 299" d="M388.61,713.78l-22.82-5.447S349.254,588.575,310.361,534.3A80.867,80.867,0,0,0,294,516.823c-2.421,30.082-5.34,62.086-7.743,79.121C280.172,637.863,221.2,718.622,221.2,718.622l-20.648-8.669s47.4-87.754,49.68-128.961c2.492-44.731,3.56-123.194,3.667-132.379H323.96C330.51,484.908,380.528,567.962,388.61,713.78Z" fill="#263238" />
                            <path id="Trazado_300" data-name="Trazado 300" d="M388.61,713.78l-22.82-5.447S349.254,588.575,310.361,534.3A80.867,80.867,0,0,0,294,516.823c-2.421,30.082-5.34,62.086-7.743,79.121C280.172,637.863,221.2,718.622,221.2,718.622l-20.648-8.669s47.4-87.754,49.68-128.961c2.492-44.731,3.56-123.194,3.667-132.379H323.96C330.51,484.908,380.528,567.962,388.61,713.78Z" fill="#fff" opacity="0.3" />
                            <path id="Trazado_301" data-name="Trazado 301" d="M366.039,371.379c-.107,21.467-.961,42.916-2.065,64.347l-.16-1.78c1.513,9.594,2.848,19.224,4.112,28.854s2.314,19.331,3.115,29.05l-9.2,1.78c-5.678-18.619-10.377-37.5-14.774-56.444-.73-22.019-.481-44.108,0-66.145l18.9.338Z" fill="#ffb573" />
                            <path id="Trazado_302" data-name="Trazado 302" d="M364.669,365.79c5.749,3.56-.943,41.118.445,69.3a61.751,61.751,0,0,0,1.335,8.4L347.1,445.659a110.1,110.1,0,0,1-2.741-13.688c-.943-13.136,0-50.285,0-50.285Z" fill="#013a63" />
                            <path id="Trazado_303" data-name="Trazado 303" d="M365.114,435.085a61.751,61.751,0,0,0,1.335,8.4L347.1,445.659a111.16,111.16,0,0,1-2.723-13.688c-.249-3.382-.374-8.366-.409-13.884,0-8.33,0-17.907.178-25.134h0c.107-6.6.231-11.25.231-11.25l20.31-15.9C370.4,369.368,363.725,406.908,365.114,435.085Z" fill="#fff" opacity="0.7" />
                            <path id="Trazado_304" data-name="Trazado 304" d="M370.756,489.3l3.685,18.085-16.127.659s-4.343-12.282,3.791-19.313Z" fill="#ffb573" />
                            <path id="Trazado_305" data-name="Trazado 305" d="M370.721,519.991l-12.14-2.385-.267-9.559,16.127-.659Z" fill="#ffb573" />
                            <path id="Trazado_306" data-name="Trazado 306" d="M345.409,442.419l21.04-3.329.587,5.8-20.221,2.118Z" fill="#013a63" />
                            <path id="Trazado_307" data-name="Trazado 307" d="M345.409,442.419l21.04-3.329.587,5.8-20.221,2.118Z" fill="#fff" opacity="0.6" />
                            <path id="Trazado_308" data-name="Trazado 308" d="M343.949,418.086c0-8.33,0-17.907.178-25.134h0a32.965,32.965,0,0,1,6.034-9.185,51.745,51.745,0,0,1-6.212,34.318Z" opacity="0.1" />
                            <path id="Trazado_309" data-name="Trazado 309" d="M391.564,717.749l-29.317-4.361.908-8.117,30.491,4.005Z" fill="#263238" />
                            <path id="Trazado_310" data-name="Trazado 310" d="M222.874,723.677l-26.433-10.5,3.151-7.9,27.626,10.4Z" fill="#263238" />
                            <path id="Trazado_311" data-name="Trazado 311" d="M310.361,534.267A80.867,80.867,0,0,0,294,516.787l1.94-24.92S308.065,511.768,310.361,534.267Z" opacity="0.3" />
                            <path id="Trazado_312" data-name="Trazado 312" d="M364.669,365.79c-26.38,43.77-38.092,97.4-38.092,97.4l-12.887,22.125-8.9-24.92-2.189-.32-3.2-.481-3.275-.5-6.728-1.068-3.4-.57c-1.139-.178-2.261-.374-3.4-.587l-3.364-.605-3.329-.623c-3.044-.587-6.016-1.193-8.9-1.78l-1.5-.338c-2.065-.481-4.041-.961-5.874-1.46s-3.56-1-5-1.5l-1.1-.374A276,276,0,0,1,266.2,397.883c.89-2.545,1.78-4.984,2.723-7.351a209.152,209.152,0,0,1,12.1-25.9l.285-.516c8.188-14.667,24.778-21.057,34.746-18.53a259.618,259.618,0,0,1,27.732,9.826,182.308,182.308,0,0,1,20.879,10.377Z" fill="#013a63" />
                            <path id="Trazado_313" data-name="Trazado 313" d="M364.669,365.79c-26.38,43.77-38.092,97.4-38.092,97.4l-12.887,22.125-8.9-24.92-2.189-.32-3.2-.481-3.275-.5-6.728-1.068-3.4-.57c-1.139-.178-2.261-.374-3.4-.587l-3.364-.605-3.329-.623c-3.044-.587-6.016-1.193-8.9-1.78l-1.5-.338c-2.065-.481-4.041-.961-5.874-1.46s-3.56-.979-5-1.5l-1.1-.374A276,276,0,0,1,266.2,397.883c.89-2.545,1.78-4.984,2.723-7.351a209.152,209.152,0,0,1,12.1-25.9l.285-.516c8.188-14.667,24.778-21.057,34.746-18.53a259.618,259.618,0,0,1,27.732,9.826,182.308,182.308,0,0,1,20.879,10.377Z" fill="#fff" opacity="0.7" />
                            <path id="Trazado_314" data-name="Trazado 314" d="M322.34,396.37s-.748,3.987-1.655,9.612a94.111,94.111,0,0,1-5.34,18.156c-1.424,2.9-7.28,14.471-6.159,19.58s-4.379,16.554-4.379,16.554l-2.189-.32c1.353-6.319,5.892-26.7,8.348-29.139,2.9-2.812,7.423-15.255,6.479-19.936S322.34,396.37,322.34,396.37Z" opacity="0.1" />
                            <path id="Trazado_315" data-name="Trazado 315" d="M303.063,489.3l3.7,18.085-16.127.659s-4.361-12.282,3.774-19.313Z" fill="#ffb573" />
                            <path id="Trazado_316" data-name="Trazado 316" d="M303.045,519.991l-12.14-2.385-.267-9.559,16.127-.659Z" fill="#ffb573" />
                            <path id="Trazado_317" data-name="Trazado 317" d="M313.28,346.37c1.78,5.037,16.02,23.14,16.02,23.14l12.46-14.24a9.789,9.789,0,0,1-2.278-2.884,6.924,6.924,0,0,1,.5-7.351,11.928,11.928,0,0,1,2.278-2.261,3.414,3.414,0,0,0,.392-.32L336.42,319.1C332.54,328.125,322.483,344.893,313.28,346.37Z" fill="#ffb573" />
                            <path id="Trazado_318" data-name="Trazado 318" d="M339.553,352.44a6.924,6.924,0,0,1,.5-7.351,11.926,11.926,0,0,1,2.278-2.261l-9.309-16.3C327.164,339.464,334.64,348.506,339.553,352.44Z" opacity="0.2" />
                            <path id="Trazado_319" data-name="Trazado 319" d="M362.515,299.414s5.055,17.658-3.56,25.828-12.994-25.383-12.994-25.383Z" fill="#ffb573" />
                            <path id="Trazado_320" data-name="Trazado 320" d="M362.515,299.414s5.055,17.658-3.56,25.828-12.994-25.383-12.994-25.383Z" opacity="0.4" />
                            <path id="Trazado_321" data-name="Trazado 321" d="M333,343.131a16.447,16.447,0,0,0,19.58,3.916,18.3,18.3,0,0,0,9.309-9.808,18.488,18.488,0,0,0,.641-1.78c3.293-11.623,1.549-39-10.271-36.775-9.683,1.78-19.58-.249-23.692,8.686a17.408,17.408,0,0,0-1.655,8.152C327.128,328.517,326.666,336.206,333,343.131Z" fill="#ffb573" />
                            <path id="Trazado_322" data-name="Trazado 322" d="M354.736,320.792a37.379,37.379,0,0,0,4.7,9.292,6.177,6.177,0,0,1-5.144.748Z" fill="#ed893e" />
                            <path id="Trazado_323" data-name="Trazado 323" d="M350.429,311.5a.676.676,0,0,0-.623.2,4.966,4.966,0,0,1-4.147,1.78.623.623,0,0,0-.694.534.605.605,0,0,0,.516.694h0a6.177,6.177,0,0,0,5.251-2.172.623.623,0,0,0,0-.872h0Z" fill="#263238" />
                            <path id="Trazado_324" data-name="Trazado 324" d="M358.3,310.735a.534.534,0,0,0-.374,0,.623.623,0,0,0-.2.854h0a6.176,6.176,0,0,0,4.877,2.955.623.623,0,0,0,.641-.605h0a.659.659,0,0,0-.623-.641h0a5,5,0,0,1-3.827-2.385.605.605,0,0,0-.5-.178Z" fill="#263238" />
                            <path id="Trazado_325" data-name="Trazado 325" d="M329.3,324.547c-1.246.356-1.317,5.927,0,10.983l-2.207.623a35.263,35.263,0,0,1-5.34-11.588c-2.795-10.573-3.186-17.426-2.172-22.713l17.533-2.261.73,5.749a4.308,4.308,0,0,0-2.118,5.34c1.9,4.824-.8,12.353-4.486,15.379C331.276,326.132,331.08,323.96,329.3,324.547Z" fill="#ffb573" />
                            <path id="Trazado_326" data-name="Trazado 326" d="M329.3,324.547c-1.246.356-1.317,5.927,0,10.983l-2.207.623a35.263,35.263,0,0,1-5.34-11.588c-2.795-10.573-3.186-17.426-2.172-22.713l17.533-2.261.73,5.749a4.308,4.308,0,0,0-2.118,5.34c1.9,4.824-.8,12.353-4.486,15.379C331.276,326.132,331.08,323.96,329.3,324.547Z" opacity="0.4" />
                            <path id="Trazado_327" data-name="Trazado 327" d="M320.774,325.936a12.46,12.46,0,0,0,6.853,6.568c4.076,1.549,6.515-1.994,5.714-6.052-.73-3.56-3.7-8.9-7.957-8.633a5.554,5.554,0,0,0-4.61,8.117Z" fill="#ffb573" />
                            <path id="Trazado_328" data-name="Trazado 328" d="M323.088,296.6s-2.118-3.667,2.51-8.028,24.03-6.141,29.833-2.545,10.555.943,10.253-1.424a4.361,4.361,0,0,1,.32,5.037s3.72-.2,5.536,5.34a4.646,4.646,0,0,0-3.845,1.086,5.856,5.856,0,0,1,1.531,5.34,7.12,7.12,0,0,0-4.236-2.083,12.228,12.228,0,0,0,2.154,3.774s-7.69.854-11.677-2.065a11.285,11.285,0,0,0,3.062,3.382s-12.46,2.314-16.625-2.634a7.458,7.458,0,0,0-1.228,6.088,7.494,7.494,0,0,1-5.643-2.314,19.972,19.972,0,0,1-10.573,4.432,13.8,13.8,0,0,0,1.78-2.439s-6.408,3.756-10.68.908a7.8,7.8,0,0,0,1.068-2.99l-1.673.837S314.882,296.957,323.088,296.6Z" fill="#263238" />
                            <path id="Trazado_329" data-name="Trazado 329" d="M345.925,324.8a7.636,7.636,0,0,1-1.21.249.32.32,0,0,1-.338-.285.3.3,0,0,1,.267-.338,4.753,4.753,0,0,0,4.557-3.453.306.306,0,1,1,.605.089,5.144,5.144,0,0,1-3.88,3.738Z" fill="#ed893e" />
                            <path id="Trazado_330" data-name="Trazado 330" d="M361.34,324.69h0c-2.243-.285-3.257-3.275-3.311-3.4a.3.3,0,0,1,.2-.392.338.338,0,0,1,.409.2s.926,2.741,2.777,2.973a.32.32,0,0,1,.267.338.3.3,0,0,1-.338.285Z" fill="#ed893e" />
                            <path id="Trazado_331" data-name="Trazado 331" d="M346.566,319.919c-.125,1.05.463,1.94,1.175,1.976s1.282-.819,1.335-1.869-.5-1.958-1.175-1.976S346.6,318.851,346.566,319.919Z" fill="#263238" />
                            <path id="Trazado_332" data-name="Trazado 332" d="M358.563,320.4c-.107,1.05.5,1.94,1.193,1.976s1.282-.819,1.335-1.887-.5-1.94-1.193-1.958S358.617,319.4,358.563,320.4Z" fill="#263238" />
                            <path id="Trazado_333" data-name="Trazado 333" d="M345.445,319.973a9.452,9.452,0,0,0,4.379-.872c1.282-.961-1.086-1.9-2.243-1.9S344.661,319.047,345.445,319.973Z" fill="#ffb573" />
                            <path id="Trazado_334" data-name="Trazado 334" d="M357.976,319.759a9.239,9.239,0,0,0,4.414.552c1.531-.5-.409-2.136-1.513-2.51S357.531,318.62,357.976,319.759Z" fill="#ffb573" />
                            <path id="Trazado_335" data-name="Trazado 335" d="M355.252,339.143s-1.566.641-3.56,1.3c-3.56,1.193-8.7,2.439-9.007.267a2.136,2.136,0,0,1,.445-1.673c1.531-2.1,6.639-2.866,10.021-3.222a5.606,5.606,0,0,0,.481,1.673,4.432,4.432,0,0,0,1.62,1.655Z" fill="#263238" />
                            <path id="Trazado_336" data-name="Trazado 336" d="M351.675,340.443c-3.56,1.193-8.7,2.439-9.007.267a2.136,2.136,0,0,1,.445-1.673C346.139,338.823,350.251,338.859,351.675,340.443Z" fill="#a02724" />
                            <path id="Trazado_337" data-name="Trazado 337" d="M338.805,317.2s1.78,4.7,0,4.7S338.805,317.2,338.805,317.2Z" fill="#fff" />
                            <path id="Trazado_338" data-name="Trazado 338" d="M335.779,321.254s1.78,4.7,0,4.7S335.779,321.254,335.779,321.254Z" fill="#fff" />
                            <path id="Trazado_339" data-name="Trazado 339" d="M359.916,306.16s2.83,4.183,1.032,4.575S359.916,306.16,359.916,306.16Z" fill="#fff" />
                            <path id="Trazado_340" data-name="Trazado 340" d="M361.767,328.73s1.638,4.788-.214,4.7S361.767,328.73,361.767,328.73Z" fill="#fff" />
                            <path id="Trazado_341" data-name="Trazado 341" d="M310.877,342.846s8.9,26.7,14.365,36.846l1.175-1.246s-9.861-28.088-11.374-35.6Z" fill="#013a63" />
                            <path id="Trazado_342" data-name="Trazado 342" d="M338.876,355.8a52.706,52.706,0,0,1-7.12,23.888v1.994s7.12-5.981,9.22-23.763Z" fill="#013a63" />
                            <path id="Trazado_343" data-name="Trazado 343" d="M324.334,379.14l1.78-3.115c3.2,4.094,5.927,1.887,5.927,1.887l1.175,2.492-3.1,8.562h-3.2Z" fill="#013a63" />
                            <path id="Trazado_344" data-name="Trazado 344" d="M329.923,384.676s-1.21,28.872,0,45.6c.765,10.68,1.584,29.922,1.05,35.03l-4.824,3.7-3.791-5.821s2.99-7.921,1.584-27.982,3.738-49.84,3.738-49.84Z" fill="#013a63" />
                            <path id="Trazado_345" data-name="Trazado 345" d="M304.878,344.448l9.612-5.091,13.119,12.175.623,15.806,9.363-12.834,5.732-2.919,4.147,6.96-5.233,8.366-3.364-4.325-11.25,9.559-8.295-13.19-5.571,3.026Z" fill="#013a63" />
                            <path id="Trazado_346" data-name="Trazado 346" d="M304.878,344.448l9.612-5.091,13.119,12.175.623,15.806,9.363-12.834,5.732-2.919,4.147,6.96-5.233,8.366-3.364-4.325-11.25,9.559-8.295-13.19-5.571,3.026Z" fill="#fff" opacity="0.6" />
                            <path id="Trazado_347" data-name="Trazado 347" d="M327.627,372.145,337.9,358.99l4.343,7.921-3.364-4.325Z" opacity="0.1" />
                            <path id="Trazado_348" data-name="Trazado 348" d="M327.627,372.145l-4.681-17-9.185,6.835,5.571-3.026Z" opacity="0.1" />
                            <path id="Trazado_349" data-name="Trazado 349" d="M298.755,448.56l-16.376,1.78s-17.515-26.575-16.162-52.563c.89-2.545,1.78-4.984,2.723-7.351a209.142,209.142,0,0,1,12.1-25.9,29.177,29.177,0,0,1,4.165-3.257l16.928,25.24S303.223,427.645,298.755,448.56Z" opacity="0.1" />
                            <path id="Trazado_350" data-name="Trazado 350" d="M298.346,371.379c-.107,21.467-.943,42.916-2.065,64.347l-.142-1.78q2.243,14.382,4.094,28.854c1.228,9.665,2.332,19.331,3.115,29.05l-9.185,1.78c-5.7-18.619-10.4-37.5-14.774-56.444-.73-22.019-.481-44.108,0-66.145l18.886.338Z" fill="#ffb573" />
                            <path id="Trazado_351" data-name="Trazado 351" d="M290.6,357.157c9.149,3.987,11.926,18.815,11.926,18.815s-4.646,56.764-4.414,59.114.641,6.817.641,6.817l-19.58,3.756s-1.638-10.573-2.581-32.165,0-39.587,4.45-47.544S290.6,357.157,290.6,357.157Z" fill="#013a63" />
                            <path id="Trazado_352" data-name="Trazado 352" d="M290.6,357.157c9.149,3.987,11.926,18.815,11.926,18.815s-4.646,56.764-4.414,59.114.641,6.817.641,6.817l-19.58,3.756s-1.638-10.573-2.581-32.165,0-39.587,4.45-47.544S290.6,357.157,290.6,357.157Z" fill="#fff" opacity="0.7" />
                            <path id="Trazado_353" data-name="Trazado 353" d="M276.185,442.366l24.048-3.987-1.477,6.105-19.883,4.094Z" fill="#013a63" />
                            <path id="Trazado_354" data-name="Trazado 354" d="M276.185,442.366l24.048-3.987-1.477,6.105-19.883,4.094Z" fill="#fff" opacity="0.6" />
                            <path id="Trazado_355" data-name="Trazado 355" d="M406.427,530.849l-3.9,56.551a3.56,3.56,0,0,1-3.827,3.151l-73.122-4.023a3.56,3.56,0,0,1-3.382-3.56l3.9-56.533a3.56,3.56,0,0,1,3.827-3.151l73.14,4.023A3.453,3.453,0,0,1,406.427,530.849Z" fill="#263238" />
                            <path id="Trazado_356" data-name="Trazado 356" d="M368.46,579.621l32.877-5.892s16.643,32.04,26.415,40.762l-36.508,13.492S373.96,607.229,368.46,579.621Z" fill="#013a63" />
                            <path id="Trazado_357" data-name="Trazado 357" d="M368.46,579.621l32.877-5.892s16.643,32.04,26.415,40.762l-36.508,13.492S373.96,607.229,368.46,579.621Z" fill="#fff" opacity="0.7" />
                            <path id="Trazado_358" data-name="Trazado 358" d="M367.623,548.792c6.159,3.685,24.475,33.09,24.475,33.09L430.475,560.7s-19.58-18.37-25.7-20.666S367.623,548.792,367.623,548.792Z" fill="#013a63" />
                            <path id="Trazado_359" data-name="Trazado 359" d="M367.089,548.792c6.266,3.685,24.92,33.09,24.92,33.09L430.991,560.7s-19.811-18.423-26.13-20.719S367.089,548.792,367.089,548.792Z" fill="#fff" opacity="0.6" />
                            <path id="Trazado_360" data-name="Trazado 360" d="M343.932,538.913s7.227,16.7,8.9,32.04l50.481-8.9s-7.476-19.758-10.68-23.14S343.932,538.913,343.932,538.913Z" fill="#013a63" />
                            <path id="Trazado_361" data-name="Trazado 361" d="M343.932,538.913s7.227,16.7,8.9,32.04l50.481-8.9s-7.476-19.758-10.68-23.14S343.932,538.913,343.932,538.913Z" fill="#fff" opacity="0.7" />
                            <path id="Trazado_362" data-name="Trazado 362" d="M383.394,528.055c-1.958-8.669-12.46-16.02-20.737-17.319-6.016-.908-10.965,10.894-12.46,15.5l-2.083-.623c.231-.748,5.7-18.387,14.774-17.035s20.363,9.345,22.535,18.993Z" fill="#263238" />
                            <path id="Trazado_363" data-name="Trazado 363" d="M332.415,523.427a4.681,4.681,0,0,1,4,3.56l4.9,25.614a3.72,3.72,0,0,0,3.346,2.777l65.86,3.56a2.047,2.047,0,0,0,2.367-2.439l-4.913-25.7a4.681,4.681,0,0,0-4.183-3.471l-73.069-4.005Z" fill="#263238" />
                            <path id="Trazado_364" data-name="Trazado 364" d="M332.415,523.427a4.681,4.681,0,0,1,4,3.56l4.9,25.614a3.72,3.72,0,0,0,3.346,2.777l65.86,3.56a2.047,2.047,0,0,0,2.367-2.439l-4.913-25.7a4.681,4.681,0,0,0-4.183-3.471l-73.069-4.005Z" fill="#fff" opacity="0.1" />
                            <path id="Trazado_365" data-name="Trazado 365" d="M385.3,564.1h-.089l-4.9-.285a2.225,2.225,0,0,1-1.887-1.6l-.8-3.1a1.335,1.335,0,0,1,.231-1.228,1.193,1.193,0,0,1,1.068-.427l4.9.285a2.207,2.207,0,0,1,1.887,1.584l.8,3.115a1.3,1.3,0,0,1-.231,1.21,1.228,1.228,0,0,1-.979.445Zm0-.819a.445.445,0,0,0,.392-.142.57.57,0,0,0,0-.5l-.8-3.1a1.406,1.406,0,0,0-1.157-1l-4.9-.285a.5.5,0,0,0-.392.142.587.587,0,0,0,0,.5l.819,3.115A1.353,1.353,0,0,0,380.4,563Z" fill="#263238" />
                            <g id="Grupo_6" data-name="Grupo 6" opacity="0.5">
                                <path id="Trazado_366" data-name="Trazado 366" d="M385.3,564.1h-.089l-4.9-.285a2.225,2.225,0,0,1-1.887-1.6l-.8-3.1a1.335,1.335,0,0,1,.231-1.228,1.193,1.193,0,0,1,1.068-.427l4.9.285a2.207,2.207,0,0,1,1.887,1.584l.8,3.115a1.3,1.3,0,0,1-.231,1.21,1.228,1.228,0,0,1-.979.445Zm0-.819a.445.445,0,0,0,.392-.142.57.57,0,0,0,0-.5l-.8-3.1a1.406,1.406,0,0,0-1.157-1l-4.9-.285a.5.5,0,0,0-.392.142.587.587,0,0,0,0,.5l.819,3.115A1.353,1.353,0,0,0,380.4,563Z" fill="#fff" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Icon404