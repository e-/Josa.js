$(function(){
	test ('Josa.c', function(){
		deepEqual(
			Josa.c('사과', '을/를'),
			'를',
			"Josa.c('사과', '을/를')"
		);
		deepEqual(
			Josa.c('이불', '을/를'),
			'을',
			"Josa.c('이불', '을/를')"
		);
		deepEqual(
			Josa.c('이불', '을'),
			'을',
			"Josa.c('이불', '을')"
		);
		deepEqual(
			Josa.c('이불', '를'),
			'을',
			"Josa.c('이불', '를')"
		);
		deepEqual(
			Josa.c('이불', '을를'),
			'을',
			"Josa.c('이불', '을를')"
		);
		deepEqual(
			Josa.c('이불', '이가'),
			'이',
			"Josa.c('이불', '이')"
		);
		deepEqual(
			Josa.c('바구니', '이가'),
			'가',
			"Josa.c('바구니', '이')"
		);
		deepEqual(
			Josa.c('이불', '은는'),
			'은',
			"Josa.c('이불', '은는')"
		);
		deepEqual(
			Josa.c('바구니', '는'),
			'는',
			"Josa.c('바구니', '는')"
		);
	});
});


