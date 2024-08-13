import { src, dest, watch } from 'gulp'
import * as dartSass  from 'sass'
import gulpsass  from 'gulp-sass'

const  sass = gulpsass(dartSass)

export function css (done){
        src('scss/app.scss')
        .pipe(sass().on('error', sass.logError) )
        .pipe(dest('build/css'))
        done()
}

export function dev(){
        watch('scss/**/**.scss', css)
}