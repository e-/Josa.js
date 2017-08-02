$(function(){
	QUnit.test ('Josa.c', function(assert){
		assert.deepEqual(
			Josa.c('사과', '을/를'),
			'를',
			"Josa.c('사과', '을/를')"
		);
		assert.deepEqual(
			Josa.c('이불', '을/를'),
			'을',
			"Josa.c('이불', '을/를')"
		);
		assert.deepEqual(
			Josa.c('이불', '을'),
			'을',
			"Josa.c('이불', '을')"
		);
		assert.deepEqual(
			Josa.c('이불', '를'),
			'을',
			"Josa.c('이불', '를')"
		);
		assert.deepEqual(
			Josa.c('이불', '을를'),
			'을',
			"Josa.c('이불', '을를')"
		);
		assert.deepEqual(
			Josa.c('이불', '이가'),
			'이',
			"Josa.c('이불', '이')"
		);
		assert.deepEqual(
			Josa.c('바구니', '이가'),
			'가',
			"Josa.c('바구니', '이')"
		);
		assert.deepEqual(
			Josa.c('이불', '은는'),
			'은',
			"Josa.c('이불', '은는')"
		);
		assert.deepEqual(
			Josa.c('바구니', '는'),
			'는',
			"Josa.c('바구니', '는')"
		);
	});
	QUnit.test ('Josa.r', function(assert){
		assert.deepEqual(
			Josa.r('사과', '을/를'),
			'사과를',
			"Josa.r('사과', '을/를')"
		);
		assert.deepEqual(
			Josa.r('이불', '을/를'),
			'이불을',
			"Josa.r('이불', '을/를')"
		);
	});

});


